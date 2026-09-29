/* Navigation and SVG viewing only. This file does not collect visitor data. */
(function () {
  'use strict';
  function ready() {
    if (window.jQuery) {
      var $ = window.jQuery;
      // Native anchors respect scroll-margin-top and reduced-motion preferences.
      $('a').off('click.smoothscroll');
      if ($.fn.magnificPopup) {
        $('a.figure-image[href$=".svg"]').magnificPopup({
          type: 'image', closeOnContentClick: true,
          image: { titleSrc: 'title' }
        });
      }
    }
    document.querySelectorAll('.academic-nav a').forEach(function (a) {
      var url = new URL(a.href, window.location.href);
      if (url.pathname === window.location.pathname && !url.hash) {
        a.setAttribute('aria-current', 'page');
      }
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      if (window.jQuery) window.jQuery(ready); else ready();
    });
  } else if (window.jQuery) window.jQuery(ready); else ready();
}());
