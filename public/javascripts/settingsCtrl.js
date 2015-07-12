angular.module('pokemonApp')
	.controller('profileCtrl', function($scope, $http) {
		$scope.updateProfile = function(code){
			$http.post("http://localhost:3000/updateuser", code)
			.success(function(data){
				console.log("adding this data:", data);
			})
			.catch(function(err){
				console.log(err);
			});
			// $scope.user.friendCode = $scope.friendCode;
		}
	})
