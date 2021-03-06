angular.module("pokemonApp", ['ui.router']);

angular.module("pokemonApp")

  .config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/views/home.html'
    })
    .state('register', {
      url: '/register',
      templateUrl: '/views/register.html',
    })
    .state('logout', {
      url: '/logout'
    })
    .state('login', {
      url: '/login',
      templateUrl: '/views/login.html'
    })
    .state('allpokemon', {
      url: "/pokemon",
      templateUrl: '/views/allpokemon.html',
      controller: "allPokemonCtrl"
    })
    .state('newuser', {
      url: '/newuser',
      templateUrl: '/views/newuser.html',
      controller: "newUserCtrl"
    })
    .state('profile', {
      url: '/profile',
      templateUrl: '/views/profile.html',
      controller: "profileCtrl"
    })
    .state('settings', {
      url: '/settings',
      templateUrl: '/views/settings.html',
      controller: 'settingsCtrl'
    })
    .state('addpokemon', {
      url: '/addpokemon',
      templateUrl: '/views/addpokemon.html',
      controller: 'addPokemonCtrl'
    })
    .state('onepokemon', {
      url: '/onepokemon/:slug',
      templateUrl: '/views/onepokemon.html',
      controller: "onePokemonCtrl"
    });
  // .state('user', {
  // 	url: '',
  // 	templateUrl: '/views/users/user.html',
  // 	abstract: true
  // })
  // .state('user.register', {
  // 	url: '/register',
  // 	templateUrl: '/views/users/users.html',
  // 	controller: 'UsersCtrl'
  // })
  // .state('user.login', {
  // 	url: '/login',
  // 	templateUrl: '/views/users/users.html',
  // 	controller: 'UsersCtrl'
  // });
});
