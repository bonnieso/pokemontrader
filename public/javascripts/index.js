angular.module('pokemonApp')
	.controller("navCtrl", function($scope, $http, $state, $rootScope) {
		$http.get("/loggedIn").then(function(resp) {
			$rootScope.userName = resp.data.displayName;
            $rootScope.firstName = resp.data._json.name.givenName;
		}).catch(function(err) {
			console.log(err)
		})

		$scope.logout = function(){
			$http.get("/logout").then(function() {
				console.log("logged out");
				$rootScope.userName = null;
			}).catch(function(err) {
				console.log(err)
			})
			$state.go('register')
		}
	})
