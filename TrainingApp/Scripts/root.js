$(document).ready(function () {
  loadContentData('/Views/Navbar.html', 'nav[data-portal-navbar]');
  loadContentData('/Views/Home.html', 'section[data-portal-content]', '#errorBox');
  //loadContentData('error/test.html', 'header', '#errorBox', '<strong><i class="fa fa-exclamation-triangle"></i>&nbsp;Achtung:</strong>&nbsp;Beim Laden ist ein Fehler aufgetreten.')
});