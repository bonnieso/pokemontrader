angular.module('pokemonApp')
	.controller('profileCtrl', function($scope) {
		$scope.userPokemon = [{
				name: "squirtle",
				sprite: "http://pokeapi.co/media/img/6.png",
				type: "water",
				level: 1
			}, {
				name: "wartortle",
				sprite: "http://pokeapi.co/media/img/7.png",
				type: "water",
				level: 90
			}, {
				name: "charizard",
				sprite: "http://pokeapi.co/media/img/8.png",
				type: "fire",
				level: 100
			}, {
				name: "pikachu",
				sprite: "http://pokeapi.co/media/img/9.png",
				type: "electric",
				level: 9
			}];


	})
