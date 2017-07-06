// Script to hide navbar on scrolldown, and fly back in when user scrolls up
// creating a navbar namespace
(function () {
  this.NavbarScroll = this.NavbarScroll || {}; //checks if navbarSroll allready exists. if not, a new empty object is created
  var ns = this.NavbarScroll;

  // global variables
  ns.delta = 5;
  // not needed! ns.navbarHeight = $('nav[data-portal-navbar]').outerHeight();

  ns.hasScrolled = function () {
    // user has to scroll more than delta
    //var st = $(window).scrollTop();
    //if (st != 0 && Math.abs(UserScroll.lastScrollTop - st) <= ns.delta) {
    //  return;
    //}
    
    if (UserScroll.scrollDirection < 0) { // users scrolled down
      $('body').addClass('navbar-up');
    } else { // user scrolled up
      $('body').removeClass('navbar-up');
    }
  }
}());

$(window).scroll(function (event) {
  NavbarScroll.hasScrolled();
});


// old implementation
/*
  ns.hasScrolled = function () {
    var st = $(window).scrollTop();
    
    // user has to scroll more than delta
    if (Math.abs(ns.lastScrollTop - st) <= ns.delta) {
      return;
    }
    // if the user scrolled down and past the navbar, add class .navbar-up

    if (st > ns.lastScrollTop && st > ns.navbarHeight) {
      $('nav[data-portal-navbar]').addClass('navbar-up');
    } else {
      // user scrolls up
      // the following if statement checks, if the user scrolls past the document (possible on mac)
      if (st + $(window).height() < $(document).height()) {
        $('nav[data-portal-navbar]').removeClass('navbar-up');
      }
    }

    // set to actual top scrolling
    ns.lastScrollTop = st;
  }



// using the namespace. Everytime the user scrolls, the didScroll variable is set to true
$(window).scroll(function (event) {
  NavbarScroll.didScroll = true;
});

// Interval that checks if the user has scrolled every 0.250s. If the user has scrolled, didScroll is set to false and the
// code that should be triggered by scrolling gets executed. didScroll is set to true again as soon as the user is scrolling further,
// but due to the timeout the code will only be executed every 0.250s.
setInterval(function () {
  if (NavbarScroll.didScroll) {
    NavbarScroll.hasScrolled();
    NavbarScroll.didScroll = false;
  }
}, 500);
*/