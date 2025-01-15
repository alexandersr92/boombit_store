<?php


use ModuleACF\Modules;

$modules = Modules::get_instance();

$modules->add_module(
  'Testimonios',
  'testimonios',
  'page_modules',
  array(
    array(
      'key' => 'field_64aecee6916ca',
      'label' => 'Nombre',
      'name' => 'nombre',
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
      'key' => 'field_64aecef1916cb',
      'label' => 'Foto',
      'name' => 'foto',
      'aria-label' => '',
      'type' => 'image',
      'instructions' => '',
      'required' => 0,
      'conditional_logic' => 0,
      'wrapper' => array(
        'width' => '',
        'class' => '',
        'id' => '',
      ),
      'return_format' => 'array',
      'library' => 'all',
      'min_width' => '',
      'min_height' => '',
      'min_size' => '',
      'max_width' => '',
      'max_height' => '',
      'max_size' => '',
      'mime_types' => '',
      'preview_size' => 'medium',
    ),
    array(
      'key' => 'field_64aecefb916cc',
      'label' => 'Testimonio',
      'name' => 'testimonio',
      'aria-label' => '',
      'type' => 'textarea',
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
      'rows' => '',
      'placeholder' => '',
      'new_lines' => '',
    ),
  )
);
