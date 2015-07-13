angular.module("pokemonApp", ['ui.router']);

angular.module("pokemonApp")

  .config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
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
      url: '/allpokemon',
      templateUrl: '/views/allpokemon.html'
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
