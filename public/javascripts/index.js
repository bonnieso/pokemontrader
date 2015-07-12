angular.module('pokemonApp')
	.controller("navCtrl", function($scope, $http) {
		$http.get("http://localhost:3000/loggedIn").success(function(data) {
			$scope.userName = data.displayName;
		}).catch(function(err) {
			console.log(err)
		})
	})
