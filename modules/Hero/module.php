<?php


use ModuleACF\Modules;

$modules = Modules::get_instance();

$modules->add_module(
  'Hero',
  'hero',
  'page_modules',
  array(
    array(
      'key' => 'field_64a32553d5c81',
      'label' => 'H1 Title',
      'name' => 'h1_title',
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
      'key' => 'field_64a32563d5c82',
      'label' => 'Description',
      'name' => 'description',
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
      'key' => 'field_64a3256ad5c83',
      'label' => 'Image',
      'name' => 'image',
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
