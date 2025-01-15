<?php
// Register Custom Post Type
function books()
{

	$labels = array(
		'name'                  => _x('Books', 'Post Type General Name', 'books'),
		'singular_name'         => _x('Book', 'Post Type Singular Name', 'books'),
		'menu_name'             => __('Books', 'books'),
		'name_admin_bar'        => __('Books', 'books'),
		'archives'              => __('Book Archives', 'books'),
		'attributes'            => __('Book Attributes', 'books'),
		'parent_item_colon'     => __('Parent Book:', 'books'),
		'all_items'             => __('All Books', 'books'),
		'add_new_item'          => __('Add New Book', 'books'),
		'add_new'               => __('Add New', 'books'),
		'new_item'              => __('New Book', 'books'),
		'edit_item'             => __('Edit Book', 'books'),
		'update_item'           => __('Update Book', 'books'),
		'view_item'             => __('View Book', 'books'),
		'view_items'            => __('View Books', 'books'),
		'search_items'          => __('Search Books', 'books'),
		'not_found'             => __('Not found', 'books'),
		'not_found_in_trash'    => __('Not found in Trash', 'books'),
		'featured_image'        => __('Featured Image', 'books'),
		'set_featured_image'    => __('Set featured image', 'books'),
		'remove_featured_image' => __('Remove featured image', 'books'),
		'use_featured_image'    => __('Use as featured image', 'books'),
		'insert_into_item'      => __('Insert into Book', 'books'),
		'uploaded_to_this_item' => __('Uploaded to this item', 'books'),
		'items_list'            => __('Books list', 'books'),
		'items_list_navigation' => __('Books list navigation', 'books'),
		'filter_items_list'     => __('Filter Books list', 'books'),
	);
	$args = array(
		'label'                 => __('Book', 'books'),
		'description'           => __('Books Description', 'books'),
		'labels'                => $labels,
		'supports'              => array('title', 'editor'),
		'taxonomies'            => array('category', 'post_tag'),
		'hierarchical'          => false,
		'public'                => true,
		'show_ui'               => true,
		'show_in_menu'          => true,
		'menu_position'         => 5,
		'menu_icon'             => 'dashicons-book-alt',
		'show_in_admin_bar'     => true,
		'show_in_nav_menus'     => true,
		'can_export'            => true,
		'has_archive'           => true,
		'exclude_from_search'   => false,
		'publicly_queryable'    => true,
		'capability_type'       => 'page',
		'show_in_rest'          => true,
	);
	register_post_type('books', $args);
}
add_action('init', 'books', 0);
