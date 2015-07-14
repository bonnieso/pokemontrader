angular.module('pokemonApp')
  .controller('newUserCtrl', function ($scope, $http, $state) {
  console.log("newusercontroller loaded");
    $scope.signup = function (user) {
      console.log("signup button works"); 
      $http.post('/addnewuser', user)
        .then(function (resp) {
          console.log("new user added", resp);
          $state.go('profile');
        })
        .catch(function (err) {
          console.log(err);
        });

    };
  })