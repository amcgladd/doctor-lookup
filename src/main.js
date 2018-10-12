import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import DoctorSearch from './DoctorSearch.js';

$(document).ready(function() {
  $("#inputForm").submit(function(event) {
    event.preventDefault();
    let userQuery = $("#userQuery").val();
    let doctorSearch = new DoctorSearch();
    let promise = doctorSearch.getDoctorByQuery(userQuery);

    promise.then(function(response) {
          let body = JSON.parse(response);
          console.log(body);
          $('#results').text(`${body}`);
        }, function(error) {
          $('.showErrors').text(`There was an error processing your request: ${error.message}`);
        });
      });
    });


//calls API based on request

//parse response to extract
  //first name, last name, address, phone number, website and whether or not the doctor is accepting new patients (the API provides this data)

//handle errors (any message not a 200 OK)

//handle null results with "no doctors meet the criteria"
