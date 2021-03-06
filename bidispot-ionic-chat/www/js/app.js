angular.module('app', ['ionic', 'firebase'])

.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
    .state('app', {
        url: '/app',
        templateUrl: 'views/app.html',
        controller: 'AppCtrl'
    });
    $urlRouterProvider.otherwise('/app');
})

.constant('Config', {
  firebaseUrl: 'https://bidispot-ionic-chat.firebaseio.com/chat/'
})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
