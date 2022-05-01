$(document).ready(function() {
  AOS.init({
  });

  (function updateStickyTopMenu() {
    var topMenu = $("#navbar");
    if (!topMenu.length) return;

    sticky = false;
    $(window).scroll(function(event) {
      var st = $(this).scrollTop()
      if (st > 25) {
        if (!sticky) {
          topMenu.addClass("sticky");
          sticky = true;
        }
      }
      else {
        if (sticky) {
          topMenu.removeClass("sticky");
          sticky = false;
        }
      }
    });
  })();
  (function initMobileMenu() {
    var menu = $(".mobile-menu");
    if (!menu.length) return;
    var backdrop = $(".mobile-menu-bg");
    if (!backdrop.length) return;
    var button = $(".navbar-toggler");
    if (!button.length) return;

    var close_button = $("#mobile-menu-close");
    if (close_button.length) {
      close_button.on("click", function(e) {
        closeMenu();
      });
    }
    var open = false;
    button.on("click", function(e) {
      openMenu();
    });
    $(window).resize(function(e) {
      closeMenu();
    });
    $(document).mouseup(function(e) {
      if (!backdrop.is(e.target)) return;
      closeMenu();
    })
    function openMenu() {
      if (open) return;
      menu.addClass("active");
      backdrop.addClass("show");
      open = true;
    }
    function closeMenu() {
      if (!open) return
      menu.removeClass("active");
      backdrop.removeClass("show");
      open = false;
    }
  })();
  (function initCommentSlide() {
    var slide = $("#comemnt-gallery")
    if (!slide) return
    slide = tns({
      container: "#comment-gallery",
      items: 1,
      slideBy: 1,
      nav: true,
      navContainer: "#gallery-nav",
      mouseDrag: true,
      prevButton: "#gallery-sidebar .prev-button",
      nextButton: "#gallery-sidebar .next-button",
    });
  })();
});
