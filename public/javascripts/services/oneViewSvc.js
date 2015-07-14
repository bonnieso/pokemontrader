angular.module("pokemonApp")
.service("oneViewSvc", function($http){
  return{
    seeOne: function(slug){
      console.log("slug:", slug);
    return $http.get("/onepokemon/" + slug);
    }
  };
});
