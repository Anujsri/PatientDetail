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
		type: String
	},
	phone:{
		type: Number,
		required: true
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

const Patient = module.exports = mongoose.model('Patient', patientSchema);

// Get Patients
module.exports.getPatients = (callback, limit) => {
	Patient.find(callback).limit(limit);
}

// Get Patient
module.exports.getPatientById = (id, callback) => {
	Patient.findById(id, callback);
}

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
