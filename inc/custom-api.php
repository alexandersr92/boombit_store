<?php
//create custom endpoint for wordpress api

add_action('rest_api_init', 'register_api');

function register_api()
{
  register_rest_route('wp/v2', '/siteSettings', array(
    'methods' => 'GET',
    'callback' => 'get_siteSetting',
  ));

  register_rest_route('wp/v2', '/cart', array(
    'methods' => 'GET',
    'callback' => 'get_cart_contents',
));

  register_rest_route('wp/v2', '/allcpt', array(
    'methods' => 'GET',
    'callback' => 'get_allcpt',
  ));
  register_rest_route('wp/v2', '/siteMenu/(?P<id>[a-zA-Z0-9-_]+)', array(
    'methods' => 'GET',
    'callback' => 'get_menu',
  ));

  register_rest_route('wp/v2', '/search', array(
    'methods' => 'GET',
    'callback' => 'getSearchResults',
  ));

 
}
function get_siteSetting()
{
  $siteSetting = array();
  $siteSetting['siteTitle'] = get_bloginfo('name');
  $siteSetting['siteDescription'] = get_bloginfo('description');
  $siteSetting['siteUrl'] = get_bloginfo('url');
  $siteSetting['frontPage'] =  get_option('page_on_front');
  $siteSetting['cartIcon'] =  get_field('cart_icon', 'options');
  $siteSetting['searchIcon'] =  get_field('search_icon', 'options');



  $siteSetting['acf'] = get_fields('options');

  return $siteSetting;
}

function get_menu($data)
{
  return  wp_get_nav_menu_items($data['id']);
}


add_action('rest_api_init', function () {
  register_rest_route('wp/v2', '/cart', array(
      'methods' => 'GET',
      'callback' => 'get_cart_contents',
      'permission_callback' => '__return_true',
  ));
});


function getSearchResults(){

  $search_query = new WP_Query(array(
    'post_type' => 'any',
    's' => sanitize_text_field($_GET['search']),
  ));

  $results = array();

  if($search_query->have_posts()){
    while($search_query->have_posts()){
      $search_query->the_post();
      $results[] = array(
        'title' => get_the_title(),
        'link' => get_the_permalink(),
        'type' => get_post_type(),
        'thumbnail' => get_the_post_thumbnail_url(),

      );
    }
  }

  return $results;
}
