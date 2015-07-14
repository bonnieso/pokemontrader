angular.module('pokemonApp')
	.controller("onePokemonCtrl", function($scope, $state, oneViewSvc, pokemonSvc) {
		console.log("slug:-:",$state.params.slug);

		oneViewSvc.seeOne($state.params.slug).then(function(resp) {
      $scope.pokemon = resp.data;
			console.log("scope", $scope.pokemon);
		});

	});
