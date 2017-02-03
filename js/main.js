(function ($, Vue, _) {

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
    data: appData,
    filters: {
      nameOrOrganization: function (lawyer) {
        if (!lawyer) return '';
        if (lawyer.first_name && lawyer.last_name) return lawyer.first_name + ' ' + lawyer.last_name;
        return lawyer.organization || '';
      }
    },
    methods: {
      sortedByCity: function (lawyers) {
        return _.orderBy(lawyers, ['city'], ['asc']);
      }
    }
  });

}(jQuery, Vue, _));
