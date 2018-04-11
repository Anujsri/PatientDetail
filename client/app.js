var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider.when('/', {
		controller:'PatientsController',
		templateUrl: 'views/patients.html'
	})
	.when('/patients', {
		controller:'PatientsController',
		templateUrl: 'views/patients.html'
	})
	.when('/patients/details/:id',{
		controller:'PatientsController',
		templateUrl: 'views/patient_details.html'
	})
	.when('/patients/add',{
		controller:'PatientsController',
		templateUrl: 'views/add_patient.html'
	})
	.when('/patients/edit/:id',{
		controller:'PatientsController',
		templateUrl: 'views/edit_patient.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});