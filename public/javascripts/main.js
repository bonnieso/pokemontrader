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
      templateUrl: '/views/register.html'
    })
    .state('login', {
      url: '/login',
      templateUrl: '/views/login.html'
    })
    .state('allpokemon', {
      url: '/allpokemon',
      templateUrl: '/views/allpokemon.html'
    })
    .state('profile', {
      url: '/profile',
      templateUrl: '/views/profile.html'
    })
    .state('settings', {
      url: '/settings',
      templateUrl: '/views/settings.html'
    })
    .state('addpokemon', {
      url: '/addpokemon',
      templateUrl: '/views/addpokemon.html'
    })
    .state('onepokemon', {
      url: '/onepokemon',
      templateUrl: '/views/onepokemon.html'
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
