const express = require('express');
const app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());

 
Patient =require('./models/patient');

// Connect to Mongoose
mongoose.connect('mongodb://localhost/patients');
var db = mongoose.connection;

app.get('/', (req, res) => {
	res.send('Please use /api/patients');
});

 

app.get('/api/patients', (req, res) => {
	Patient.getPatients((err, patients) => {
		if(err){
			throw err;
		}
		res.json(patients);
	});
});

app.get('/api/patients/:_id', (req, res) => {
	Patient.getPatientById(req.params._id, (err, patient) => {
		if(err){
			throw err;
		}
		res.json(patient);
	});
});



app.post('/api/patients', (req, res) => {
	var patient = req.body;
	Patient.addPatient(patient, (err, patient) => {
		if(err){
			throw err;
		}
		res.json(patient);
	});
});

app.put('/api/patients/:_id', (req, res) => {
	var id = req.params._id;
	var patient = req.body;
	Patient.updatePatient(id, patient, {}, (err, patient) => {
		if(err){
			throw err;
		}
		res.json(patient);
	});
});

app.delete('/api/patients/:_id', (req, res) => {
	var id = req.params._id;
	Patient.removePatient(id, (err, patient) => {
		if(err){
			throw err;
		}
		res.json(patient);
	});
});

http.listen(process.env.PORT || 3000,function(){
	console.log('listening on', http.address().port);
});

