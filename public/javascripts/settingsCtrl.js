angular.module('pokemonApp')
  .controller('settingsCtrl', function($scope, $http) {
    $scope.updateProfile = function(code) {
      console.log("This is the code", code);
      $http.post("/updateuser", code)
        .success(function(data) {
          console.log("adding this data:", data);
        })
        .catch(function(err) {
          console.log(err);
        });
    };
  });