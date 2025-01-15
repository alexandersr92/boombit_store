<?php
add_action('after_setup_theme', 'blankslate_setup');
function blankslate_setup()
{
  load_theme_textdomain('blankslate', get_template_directory() . '/languages');
  add_theme_support('title-tag');
  add_theme_support('post-thumbnails');
  add_theme_support('responsive-embeds');
  add_theme_support('automatic-feed-links');
  add_theme_support('html5', array('search-form', 'navigation-widgets'));
  add_theme_support('woocommerce');
  global $content_width;
  if (!isset($content_width)) {
    $content_width = 1920;
  }
  register_nav_menus(array('main-menu' => esc_html__('Main Menu', 'blankslate')));
  register_nav_menus(array('footer-menu' => esc_html__('Footer Menu', 'blankslate')));
}



add_filter('document_title_separator', 'blankslate_document_title_separator');
function blankslate_document_title_separator($sep)
{
  $sep = esc_html('|');
  return $sep;
}
add_filter('the_title', 'blankslate_title');
function blankslate_title($title)
{
  if ($title == '') {
    return esc_html('...');
  } else {
    return wp_kses_post($title);
  }
}
function blankslate_schema_type()
{
  $schema = 'https://schema.org/';
  if (is_single()) {
    $type = "Article";
  } elseif (is_author()) {
    $type = 'ProfilePage';
  } elseif (is_search()) {
    $type = 'SearchResultsPage';
  } else {
    $type = 'WebPage';
  }
  echo 'itemscope itemtype="' . esc_url($schema) . esc_attr($type) . '"';
}
add_filter('nav_menu_link_attributes', 'blankslate_schema_url', 10);
function blankslate_schema_url($atts)
{
  $atts['itemprop'] = 'url';
  return $atts;
}
if (!function_exists('blankslate_wp_body_open')) {
  function blankslate_wp_body_open()
  {
    do_action('wp_body_open');
  }
}
add_action('wp_body_open', 'blankslate_skip_link', 5);
function blankslate_skip_link()
{
  echo '<a href="#content" class="skip-link screen-reader-text">' . esc_html__('Skip to the content', 'blankslate') . '</a>';
}
add_filter('the_content_more_link', 'blankslate_read_more_link');
function blankslate_read_more_link()
{
  if (!is_admin()) {
    return ' <a href="' . esc_url(get_permalink()) . '" class="more-link">' . sprintf(__('...%s', 'blankslate'), '<span class="screen-reader-text">  ' . esc_html(get_the_title()) . '</span>') . '</a>';
  }
}
add_filter('excerpt_more', 'blankslate_excerpt_read_more_link');
function blankslate_excerpt_read_more_link($more)
{
  if (!is_admin()) {
    global $post;
    return ' <a href="' . esc_url(get_permalink($post->ID)) . '" class="more-link">' . sprintf(__('...%s', 'blankslate'), '<span class="screen-reader-text">  ' . esc_html(get_the_title()) . '</span>') . '</a>';
  }
}
add_filter('big_image_size_threshold', '__return_false');
add_filter('intermediate_image_sizes_advanced', 'blankslate_image_insert_override');
function blankslate_image_insert_override($sizes)
{
  unset($sizes['medium_large']);
  unset($sizes['1536x1536']);
  unset($sizes['2048x2048']);
  return $sizes;
}
add_action('widgets_init', 'blankslate_widgets_init');
function blankslate_widgets_init()
{
  register_sidebar(array(
    'name' => esc_html__('Sidebar Widget Area', 'blankslate'),
    'id' => 'primary-widget-area',
    'before_widget' => '<li id="%1$s" class="widget-container %2$s">',
    'after_widget' => '</li>',
    'before_title' => '<h3 class="widget-title">',
    'after_title' => '</h3>',
  ));
}
add_action('wp_head', 'blankslate_pingback_header');
function blankslate_pingback_header()
{
  if (is_singular() && pings_open()) {
    printf('<link rel="pingback" href="%s" />' . "\n", esc_url(get_bloginfo('pingback_url')));
  }
}
add_action('comment_form_before', 'blankslate_enqueue_comment_reply_script');
function blankslate_enqueue_comment_reply_script()
{
  if (get_option('thread_comments')) {
    wp_enqueue_script('comment-reply');
  }
}
function blankslate_custom_pings($comment)
{
?>
  <li <?php comment_class(); ?> id="li-comment-<?php comment_ID(); ?>"><?php echo esc_url(comment_author_link()); ?></li>
<?php
}
add_filter('get_comments_number', 'blankslate_comment_count', 0);
function blankslate_comment_count($count)
{
  if (!is_admin()) {
    global $id;
    $get_comments = get_comments('status=approve&post_id=' . $id);
    $comments_by_type = separate_comments($get_comments);
    return count($comments_by_type['comment']);
  } else {
    return $count;
  }
}
// borrar lo que no sirve



//define dir and path constant 
define('THEME_DIR', get_template_directory());
define('THEME_URI', get_template_directory_uri());





//wp-enqueue-scripts
/* Require plugins on activation */
require_once(THEME_DIR . '/inc/custom-api.php');
require_once(THEME_DIR . '/inc/site-options.php');
require_once(THEME_DIR . '/cpt/books.php');

require_once('plugin-activation.php');
function add_module_attribute($tag, $handle)
{
  if (strpos($handle, 'script_dev') !== false) {
    $tag = str_replace('<script', '<script type="module">
    import RefreshRuntime from "http://localhost:5173/wp-content/themes/' . end(explode('/', get_template_directory_uri())) . '/@react-refresh"
    RefreshRuntime.injectIntoGlobalHook(window)
    window.$RefreshReg$ = () => {}
    window.$RefreshSig$ = () => (type) => type
    window.__vite_plugin_react_preamble_installed__ = true
</script><script type="module"', $tag);
  }
  return $tag;
}

//function for get manifest.json and get file key
function get_manifest($file)
{
  $manifest = json_decode(file_get_contents(get_template_directory_uri() . '/dist/manifest.json'), true);
  return $manifest['src/main.js'][$file];
}
function get_manifest_css($file)
{
  $manifest = json_decode(file_get_contents(get_template_directory_uri() . '/dist/manifest.json'), true);
  return $manifest['src/main.js'][$file][0];
}
function is_dir_empty($dir)
{
  return (count(glob("$dir/*")) === 0) ? true : false;
}

function my_scripts_method()
{
  //if folder dist exists
  if (!is_dir_empty(get_template_directory_uri() . '/dist')) {

    wp_enqueue_style('style', get_template_directory_uri() . '/dist/' . get_manifest_css('css'));
    wp_enqueue_script('script', get_template_directory_uri() . '/dist/' . get_manifest('file'), array(), '1.0.0', true);
  } else {

    //wp_enqueue_style('style', get_template_directory_uri() . '/css/style.css');
    wp_enqueue_script('script_dev', 'http://localhost:5173/src/main.js', array(), '1.0.0', true);
    add_filter('script_loader_tag', 'add_module_attribute', 10, 2);
  }
}



add_action('wp_enqueue_scripts', 'my_scripts_method');


// Custom plugin used with ACF to provide modular layouts for pages and/or posts.
include_once(THEME_DIR . '/plugins/modules/class-modules.php');

$modules = ModuleACF\Modules::get_instance();
$modules->add_module_section('page_modules', 'page');
$modules->load_modules(THEME_DIR . '/modules/');


// Remove gutenberg from the page editor
add_filter('use_block_editor_for_post', 'hide_editor', 10, 2);
function hide_editor($use_block_editor, $post_type)
{
  remove_post_type_support('page', 'editor'); // disable standard editor
  if ($post_type->post_type == 'post') {
    return true; // and disable gutenberg
  } else {
    return false;
  }
}
