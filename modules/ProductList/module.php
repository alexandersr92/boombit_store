<?php


use ModuleACF\Modules;

$modules = Modules::get_instance();

$modules->add_module(
	'Product Lits module',
	'productListModule',
	'page_modules',
	array(
		array(
      'key' => 'field_64a32553d5c813',
      'label' => 'Title',
      'name' => 'title',
      'aria-label' => '',
      'type' => 'text',
      'instructions' => '',
      'required' => 0,
      'conditional_logic' => 0,
      'wrapper' => array(
        'width' => '',
        'class' => '',
        'id' => '',
      ),
      'default_value' => '',
      'maxlength' => '',
      'placeholder' => '',
      'prepend' => '',
      'append' => '',
    ),
		array(
			'key' => 'field_67880c55e04f3',
			'label' => 'Number of Post',
			'name' => 'number_of_post',
			'aria-label' => '',
			'type' => 'number',
			'instructions' => '',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'default_value' => '',
			'min' => '',
			'max' => '',
			'placeholder' => '',
			'step' => '',
			'prepend' => '',
			'append' => '',
		),
	)
);
