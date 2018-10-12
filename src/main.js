import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import DoctorSearch from './DoctorSearch.js';


function parseResults(data){
  let finalOutput = [];
  data.forEach(function(doctor){
    //create a div with doctor information
    let doctorDiv =
    `<div>` +
    `<h1>` +
    doctor.profile.first_name + ` ` + doctor.profile.last_name + `</h1>`+
    `<p>` +
    doctor.practices[0].visit_address.street + `</p>`+
    `<p>` +
    doctor.practices[0].visit_address.city + ` ` + doctor.practices[0].visit_address.state + ` ` + doctor.practices[0].visit_address.zip + `</p>`+
    `<p>Phone: ` +
    doctor.practices[0].phones[0].number + `</p>`;

    //check for website
    if (doctor.practices[0].hasOwnProperty('website')) {
      doctorDiv += `<a href=`+ doctor.practices[0].website + `>Wesbite</a>`;
    } 

    //checks status of accepting patients
    if(doctor.practices[0].accepts_new_patients == true) {
      doctorDiv += `<p>Accepting New Patients</p></div>`;
    } else {
      doctorDiv += `<p>Not Currently Accepting New Patients</p></div>`;
    }

    //push div to finalOuput
    finalOutput.push(doctorDiv);
  });
  return finalOutput;
}

$(document).ready(function() {
  $("#inputForm").submit(function(event) {
    event.preventDefault();
    let userQuery = $("#userQuery").val();
    let doctorSearch = new DoctorSearch();
    let promise = doctorSearch.getDoctorByQuery(userQuery);

    promise.then(function(response) {
      let body = JSON.parse(response);
      let results = body.data;
      console.log(results);
      if (results === undefined || results.length == 0) {
          $('#results').text("Sorry, we have no results for that search term");
      } else {
      let finalHTML = parseResults(results);
      $('#results').html(finalHTML);
    }

    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });
});
