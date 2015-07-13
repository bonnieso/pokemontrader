angular.module('pokemonApp')
	.controller("navCtrl", function($scope, $http, $state, $rootScope) {
		$http.get("http://localhost:3000/loggedIn").then(function(resp) {
			$rootScope.userName = resp.data.displayName;
		}).catch(function(err) {
			console.log(err)
		})

		$scope.logout = function(){
			$http.get("http://localhost:3000/logout").then(function() {
				console.log("logged out");
				$rootScope.userName = null;
			}).catch(function(err) {
				console.log(err)
			})
			$state.go('register')
		}
	})
