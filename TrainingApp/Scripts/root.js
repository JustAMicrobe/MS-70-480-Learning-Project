$(document).ready(function () {
  loadContentData('/Views/Header/_Navbar.html', 'nav[data-portal-function="navbar"]', '#errorBox');
  loadContentData('/Views/Header/_PageTitle.html', 'header[data-portal-function="header"] hgroup', '#errorBox');
  loadContentData('/Views/Content/_Home.html', 'section[data-portal-function="content"]', '#errorBox');
  loadContentData('/Views/Footer/_Footer.html', 'footer[data-portal-function="footer"]', '#errorBox');
  //loadContentData('error/test.html', 'header', '#errorBox', '<strong><i class="fa fa-exclamation-triangle"></i>&nbsp;Achtung:</strong>&nbsp;Beim Laden ist ein Fehler aufgetreten.')
});