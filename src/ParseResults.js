export default function ParseResults(data){
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
