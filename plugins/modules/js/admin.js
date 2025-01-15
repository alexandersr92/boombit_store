
jQuery(document).ready(function ($) {
  const container = $('<div class="modules screenshot-container"><img /></div>')
  const screenshotsUrls = ModuleACFModules.screenshots

  $(document).on('mouseenter', 'a[data-layout]', function () {
    const a = this

    $('img', container).attr('src', '')
    const layout = $(this).attr('data-layout')

    $(this).closest('.acf-fc-popup').append(container)

    $('img', container).attr('src', screenshotsUrls[layout])
    $(container).show()

    const pos = jQuery(this).position()
    const width = jQuery(a).outerWidth()

    jQuery(container).css({
      position: 'absolute',
      bottom: '0px',
      right: (pos.left + width) + 'px'
    }).show()
  })

  $(document).on('mouseleave', 'a[data-layout]', function () {
    // $('.modules.screenshot-container').remove();
  })
})
