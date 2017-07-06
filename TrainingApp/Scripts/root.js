// include all script files
//$.getScript('/Scripts/bootstrap.min.js');
//$.getScript('/Scripts/Custom/navbar.js');

// conditional includes
//if ($('#qunitTest').length) {
//  $getScript('/Scripts/qunit.js');
//}

$(document).ready(function () {
  loadContentData('/Views/Navbar.html', 'nav[data-portal-navbar]');
  //loadContentData('error/test.html', 'header', '#errorBox', '<strong><i class="fa fa-exclamation-triangle"></i>&nbsp;Achtung:</strong>&nbsp;Beim Laden ist ein Fehler aufgetreten.')
});