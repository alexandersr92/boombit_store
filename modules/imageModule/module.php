<?php


use ModuleACF\Modules;

$modules = Modules::get_instance();

$modules->add_module(
	'Image module',
	'imageModule',
	'page_modules',
	array(
		array(
			'key' => 'module_image_url',
			'label' => 'Image',
			'name' => 'module_image_url',
			'type' => 'image',
			'instructions' => '',
			'required' => 1,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'return_format' => 'object',
			'preview_size' => 'medium',
			'library' => 'all',
			'min_width' => 00,
			'min_height' => 600,
			'min_size' => '',
			'max_width' => '',
			'max_height' => '',
			'max_size' => '',
			'mime_types' => '',
		),
	)
);
