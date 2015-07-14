angular.module('pokemonApp')
.service('pokemonSvc', function($http){
  return{
    pokedex: function(){
      return $http.get("/pokedex");
    }
  };
});
