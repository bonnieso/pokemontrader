angular.module('pokemonApp')
	.controller('profileCtrl', function($scope, $rootScope, $http) {
//		$scope.firstName = $rootScope.firstName;
//		$scope.userName = $rootScope.userName;
		$scope.userID = $rootScope.userId;
  
        $http.get('/getprofile')
          .then(function(resp){
            console.log("this is resp data", resp.data);
            $scope.trainerName = resp.data.trainer_name;
            $scope.friendCode = resp.data.friend_code;
        })
          .catch(function(err){
            console.log(err);
        });
  
  

//		$http.get('/pokedex').then(function(resp) {
//			$scope.pokedex = resp.data;
//		}).catch(function(err) {
//			console.log(err);
//		});
//  
//		$scope.userPokemon = [];
//		$scope.loadPokemon = function() {
//		// 	console.log("pokedex:", $scope.pokedex);
//			angular.forEach($scope.pokedex, function(pokemon) {
//				if (pokemon.userID === $scope.userID) {
//					$scope.userPokemon.push(pokemon);
//				}
//			});
//			// $scope.userPokemon = [];
//		};

	});
