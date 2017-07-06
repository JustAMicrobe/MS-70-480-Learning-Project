// file that determines wether a user scrolled, how much he scrolled and in which direction.
(function () {
  this.UserScroll = this.UserScroll || {};
  var ns = this.UserScroll;

  // variables
  ns.didScroll        = false;
  ns.lastScrollTop    = 0;
  ns.scrollDirection  = 0;

  // methods
  // determines the scroll direction (-1 = down, 0 = top of the document, -1 = down
  ns.getScrollDirection = function () {
    var st = $(window).scrollTop();
    if (st > ns.lastScrollTop) {
      ns.didScroll        = true;
      ns.scrollDirection  = -1;
    } else if (st == 0) {
      ns.didScroll        = false;
      ns.scrollDirection  = 0;
      return 0
    } else {
      // user scrolls up
      // the following if statement checks, if the user scrolls past the document (possible on mac)
      if (st + $(window).height() < $(document).height()) {
        ns.didScroll = true;
        ns.scrollDirection  = -1;
      }
    }
    ns.lastScrollTop = st;
  }
}());

$(window).scroll(function (event) {
  UserScroll.getScrollDirection();
});