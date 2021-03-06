const mongoose = require('mongoose');

// Patient Schema
const patientSchema = mongoose.Schema({
	gender:{
		type: String,
		required: true
	},
	information:{
		type: String
	},
    	 	 
	firstname:{
		type: String,
		required: true
	},
      	 	 
	lastname:{
		type: String,
		required: true
	},
 
	 	 	 
	phone:{
		type: Number
	},
	dob:{
		type: Date,
		required: true
	},
    age:{
    	type: Number,
    	required: true
    },
    image_url:{
		type: String,
		default: "http://icons.iconarchive.com/icons/icons-land/vista-people/256/Person-Male-Light-icon.png"
	}

});

patientSchema.virtual('name.full').get(function () {
    return this.name.firstname + ' ' + this.name.lastname;
});

const Patient = module.exports = mongoose.model('Patient', patientSchema);

// Get Patients
module.exports.getPatients = (callback, limit) => {
	Patient.find(callback).limit(limit);
}

// Get Patient
module.exports.getPatientById = (id, callback) => {
	Patient.findById(id, callback);
}

// Get Patients By Name
  
// Add Patient
module.exports.addPatient = (patient, callback) => {
	Patient.create(patient, callback);
}

// Update Patient
module.exports.updatePatient = (id, patient, options, callback) => {
	var query = {_id: id};
	var update = {
		 
		gender: patient.gender,
		information: patient.information,
		firstname: patient.firstname,
		lastname: patient.lastname,
		phone: patient.phone,
		age: patient.age,
		dob: patient.dob,
		 
	}
	Patient.findOneAndUpdate(query, update, options, callback);
}

// Delete Patient
module.exports.removePatient = (id, callback) => {
	var query = {_id: id};
	Patient.remove(query, callback);
}



