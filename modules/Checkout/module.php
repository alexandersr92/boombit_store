<?php


use ModuleACF\Modules;

$modules = Modules::get_instance();

$modules->add_module(
  'Checkout',
  'checkout',
  'page_modules',
  array(
    array(
      'key' => 'field_64a32553d5cww81',
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

  )
);
