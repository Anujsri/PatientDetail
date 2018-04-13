 var myApp = angular.module('myApp');

myApp.controller('PatientsController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('PatientsController loaded...');

	$scope.getPatients = function(){
		$http.get('/api/patients').success(function(response){
			$scope.patients = response;
		});
	}

	 

	$scope.getPatient = function(){
		var id = $routeParams.id;
		$http.get('/api/patients/'+id).success(function(response){
			$scope.patient = response;
		});
	}

	$scope.addPatient = function(){
		console.log($scope.patient);
		$http.post('/api/patients/', $scope.patient).success(function(response){
			window.location.href='#/patients';
		});
	}

	$scope.updatePatient = function(){
		var id = $routeParams.id;
		$http.put('/api/patients/'+id, $scope.patient).success(function(response){
			window.location.href='#/patients';
		});
	}

	$scope.removePatient = function(id){
		$http.delete('/api/patients/'+id).success(function(response){
			window.location.href='#/patients';
		});
	}
}]);