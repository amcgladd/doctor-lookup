import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import DoctorSearch from './DoctorSearch.js';
import ParseResults from './ParseResults.js';


$(document).ready(function() {
  $("#inputForm").submit(function(event) {
    event.preventDefault();
    let userQuery = $("#userQuery").val();
    let doctorSearch = new DoctorSearch();
    let promise = doctorSearch.getDoctorByQuery(userQuery);

    promise.then(function(response) {
      let body = JSON.parse(response);
      let results = body.data;
      if (results === undefined || results.length == 0) {
          $('#results').text("Sorry, we have no results for that search term");
      } else {
      $('#results').html(ParseResults(results));
    }

    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });
});
