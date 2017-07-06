// contains Methods to load html content using jquery functions
// this file is used to have standardized error messages
function loadContentData(url, successTarget, errorTarget, errorHtml) {
  $(successTarget).load(url, function (response, status, xhr) {
    if (status == 'error') {
      $(errorTarget).removeClass('hidden');
      $(errorTarget + '> p').html(errorHtml + '<br/><br/>' + xhr.status + '&nbsp;' + xhr.statusText);
    }
  });
}