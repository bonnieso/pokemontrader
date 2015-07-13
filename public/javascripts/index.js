angular.module('pokemonApp')
	.controller("navCtrl", function($scope, $http, $state, $rootScope) {
		$http.get("/loggedIn").then(function(resp) {
			var userData = resp.data;
			$rootScope.userName = userData.displayName;
			$rootScope.firstName = userData.name._json.name.givenName;
			$rootScope.userId = userData.id;
		}).catch(function(err) {
			console.log(err);
		});

		$scope.logout = function(){
			$http.get("/logout").then(function() {
				console.log("logged out");
				$rootScope.userName = null;
			}).catch(function(err) {
				console.log(err);
			});
			$state.go('register');
		};
	});
