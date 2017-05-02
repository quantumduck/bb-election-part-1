$(document).ready(function() {
  var rootURL = 'https://bb-election-api.herokuapp.com/';
  var results = document.createElement('ul');
  results.id = "results";
  $('body').append('<h1>Election Results</h1>')
  $('body').append(results);
  $.ajax({
    url: rootURL,
    method: 'GET',
    dataType: 'json'
      // data: { limit: 2, stuff: 4 }
  }).done(function(data) {
    var candidates = data.candidates;
    for (var i = 0; i < candidates.length; i++) {
      $('body').append(
        '<li><strong>' +
        candidates[i].name +
        ':</strong> <em>' +
        candidates[i].votes +
        '</em></li>'
      );
    }
  }).fail(function() {}).always(function() {});

  // Imagination!

});
