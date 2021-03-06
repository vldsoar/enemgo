$(document).on('turbolinks:load', function() {
  var $navLink = $(".sidebar .nav-link[data-toggle='submenu']");
  var $parent = $navLink.parent();

  if ($parent.find('li.nav-item.active').length > 0) {
    $navLink.attr('aria-expanded', true)
    .next('.sidebar-submenu')
    .show();
    $parent.addClass('active');
  } else {
    $parent.removeClass('active')
  }

  $('.btn-preview').on('click', function() {
    $('body').toggleClass('sidebar-wrapped');
  });

  var sidebar = {};

  $(document).on('click', '.back-sidebar', function(){
    sidebar.close();
  });

   $('.sidebar-btn-toggle').on('click', function() {
     sidebar.open();
   });

  sidebar.open = function() {
    $('body').addClass('sidebar-open').prepend('<div class="back-sidebar"></div>');
  }

  sidebar.close = function(e) {
    $('body').removeClass('sidebar-open');
    $('.back-sidebar').remove();
  }

});

$(function () {
  $(document).on('click', ".sidebar .nav-link[data-toggle='submenu']", function(e) {
    e.preventDefault();
    var $submenu = $(this).next('.sidebar-submenu');

    if ($submenu.length < 1)
      return;

    $(this).attr('aria-expanded', function(i, value) {
      return value == 'true' ? 'false' : 'true'
    });

    $submenu.slideToggle('show');
  });

});
