angular.module('pokemonApp')
	.controller("onePokemonCtrl", function($scope, $state, oneViewSvc, pokemonSvc) {
		oneViewSvc.seeOne($state.params.slug).then(function(resp) {
      console.log("respppp:", resp);
			})
			// pokemonSvc.pokedex().then(function(resp) {
			//   $scope.pokedex = resp;
			//   console.log($state.params);
			// 	console.log("responfleek:", resp);
			// })
			// .catch(function(err){
			//   console.log(err);
			// });
	});
