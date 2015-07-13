angular.module('pokemonApp')
  .controller('newUserCtrl', function ($scope, $http) {
  console.log("newusercontroller loaded");
    $scope.signup = function (user) {
      console.log("signup button works");
      $http.post('/addnewuser', user)
        .then(function (resp) {
          console.log(resp);
        })
        .catch(function (err) {
          console.log(err);
        });
    };
  })