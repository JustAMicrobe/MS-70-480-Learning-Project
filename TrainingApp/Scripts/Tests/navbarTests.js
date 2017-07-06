// function to display the test text
function fnEqualFunctionTest(expected, result) {
  return 'Expected value: ' + expected + '  Actual value: ' + result;
}

function fnCallNavbarTests() {
  // Tests for scripts/custom/navbar.js
  test('NavbarScroll namespace value check on page load Test', function () {
    expect(5);
    var expected = false;
    equal(NavbarScroll.didScroll, expected, fnEqualFunctionTest(expected, NavbarScroll.didScroll));
    expected = 0;
    equal(NavbarScroll.lastScrollTop, expected, fnEqualFunctionTest(expected, NavbarScroll.lastScrollTop));
    expected = 5;
    equal(NavbarScroll.delta, expected, fnEqualFunctionTest(expected, NavbarScroll.delta));
    expected = $('nav[data-portal-navbar]').outerHeight();
    equal(NavbarScroll.navbarHeight, expected, fnEqualFunctionTest(expected, NavbarScroll.navbarHeight));
    expected = 0;
    $(window).scroll();
    equal(NavbarScroll.lastScrollTop, expected, fnEqualFunctionTest(expected, NavbarScroll.lastScrollTop));
  });


}
