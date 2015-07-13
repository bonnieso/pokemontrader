angular.module('pokemonApp')
	.controller('profileCtrl', function($scope, $rootScope, $http) {
		$scope.firstName = $rootScope.firstName;
		$scope.userName = $rootScope.userName;
		$scope.userID = $rootScope.userId;

		$http.get('/pokedex').then(function(resp) {
			$scope.pokedex = resp.data;
		}).catch(function(err) {
			console.log(err);
		});
		$scope.userPokemon = [];
		$scope.loadPokemon = function() {
		// 	console.log("pokedex:", $scope.pokedex);
			angular.forEach($scope.pokedex, function(pokemon) {
				if (pokemon.userID === $scope.userID) {
					$scope.userPokemon.push(pokemon);
				}
			});
			// $scope.userPokemon = [];
		};

	});
