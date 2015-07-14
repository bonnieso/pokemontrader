angular.module('pokemonApp')
  .controller('settingsCtrl', function($scope, $http) {
  
    $scope.updateProfile = function(code) {
      console.log("This is the code", code);
      $http.post("/updateuser", code)
        .success(function(data) {
          console.log("adding this data:", data);
          $scope.trainerName = data.trainer_name;
          $scope.friendCode = data.friend_code;
        })
        .catch(function(err) {
          console.log(err);
        });
    };
  
        $http.get('/getprofile')
          .then(function(resp){
            console.log("this is resp data", resp.data);
            $scope.trainerName = resp.data.trainer_name;
            $scope.friendCode = resp.data.friend_code;
        })
          .catch(function(err){
            console.log(err);
        });
  });

