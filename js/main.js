(function ($, Vue) {
  var appData = { lawyers: [] };

  var loadLawyers = function () {
    $.getJSON('lawyers.json', function (data) {
      appData.lawyers = data;
    });
  };

  // init
  loadLawyers();

  var app = new Vue({
    el: "#lawyers-list",
    data: appData
  });
}(jQuery, Vue));
