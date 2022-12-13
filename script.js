$(document).ready(function () {
  $.ajaxSetup({ cache: false });

  function searchEng() {
    var searchField = $.trim($("#search").val());
    var caseExp = new RegExp(searchField, "i");
    $.getJSON("kodepos.json", function (data) {
      var output = '<div class="list-group">';
      $.each(data, function (key, val) {
        if (
          val.urban.search(caseExp) !== -1 ||
          val.city.search(caseExp) !== -1 ||
          val.province_code.search(caseExp) !== -1 ||
          val.postal_code.search(caseExp) !== -1 ||
          (val.urban + " " + val.city + " " + val.province_code).search(caseExp) !== -1
        ) {
          output += '<div class="list-item"><h2 class="list-group-item-heading">' + val.urban + "</h2>" + '<h5 class="list-group-item-heading">' + "PROVINSI: " + val.province_code + "</h5>";
          output += "<p>" + val.city + "</p>" + '<p class="small">' + val.postal_code + "</p>" + "</div>";
        }
      });
      output += "</div>";
      $("#searchResult").html(output);
    });
  }

  $("#searchButton").click(function () {
    searchEng();
  });
});
