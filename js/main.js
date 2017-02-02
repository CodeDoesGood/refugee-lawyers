(function ($, Vue) {
  var appData = { lawyers: [] };

  var loadLawyers = function () {
    $.getJSON('lawyers.json')
      .done(function (json) {
        appData.lawyers = json;
      })
      .fail(function (jqxhr, status, error) {
        console.log(status, error);
      });
  };

  // init
  loadLawyers();

  var app = new Vue({
    el: "#lawyers-list",
    data: appData
  });
}(jQuery, Vue));
