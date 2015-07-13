angular.module('pokemonApp')
	.controller("addPokemonCtrl", function($scope, $rootScope, $http) {
		$http.get('/pokedex').then(function(resp) {
				$scope.pokedex = resp.data;
			})
			.catch(function(err) {
				console.log(err);
			});
		$scope.availablePokemonz = [];
		$scope.searchPokemon = function(pokeName) {
			$scope.availablePokemonz = [];
			// console.log($scope.availablePokemonz);
			angular.forEach($scope.pokedex, function(pokemon) {
				// console.log("pokemon", pokemon);
				if (pokemon.name === pokeName) {
					$scope.availablePokemonz.push(pokemon)
				}
			});
			// console.log($scope.availablePokemonz);
		};

	});
