$(document).ready(function() {
  var rootURL = 'https://bb-election-api.herokuapp.com/';
  var results = document.createElement('ul');
  results.id = "results";
  $('body').append('<h1>Election Results</h1>')
  $('body').append(results);
  $('body').append('<div id="errors"></div>')
  $.ajax({
    url: rootURL,
    method: 'GET',
    dataType: 'json'
      // data: { limit: 2, stuff: 4 }
  }).done(function(data) {
    var candidates = data.candidates;
    for (var i = 0; i < candidates.length; i++) {
      $('#results').append(
        '<li><strong>' +
        candidates[i].name +
        ':</strong> <em>' +
        candidates[i].votes +
        '</em></li>'
      );
    }
  }).fail(function() {
    $('#errors').append('<p class="error">[Error loading election results.]</p>');
  }).always(function() {});

  // Imagination!

});
