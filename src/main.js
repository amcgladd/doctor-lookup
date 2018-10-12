import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import DoctorSearch from './DoctorSearch.js';


function parseResults(data){
  let finalOutput = [];
  data.forEach(function(doctor){
    console.log(doctor.profile.first_name,doctor.profile.last_name);
    //create a div with doctor information
    let doctorDiv =
    `<div><h1>` +doctor.profile.first_name+ ` ` +doctor.profile.last_name + `</h1></div>`;
    //push div to finalOuput
    finalOutput.push(doctorDiv);
  });
  return finalOutput;
}

// first name,
// last name,
// address,
// phone number,
// website
// whether or not the doctor is accepting new patients

$(document).ready(function() {
  $("#inputForm").submit(function(event) {
    event.preventDefault();
    let userQuery = $("#userQuery").val();
    let doctorSearch = new DoctorSearch();
    let promise = doctorSearch.getDoctorByQuery(userQuery);

    promise.then(function(response) {
      let body = JSON.parse(response);
      let results = body.data;
      let finalHTML = parseResults(results);
      $('#results').html(finalHTML);


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
