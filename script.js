function scrollToElement (selector) {
    $('html, body').animate({
      scrollTop: $(selector).offset().top
    }, 1500);    
  };
  
  $(document).on('click', 'a.nav-link', function () {
    scrollToElement($(this).attr('href'));
  });