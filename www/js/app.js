angular.module('starter', ['ionic', 'ngMap','firebase','mandapam'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'tpl/home.html'
    })
    .state('search', {
      url: '/search',
      templateUrl: 'tpl/search.html',
      controller: function($scope, NgMap, $firebaseArray, DataService) {
        $scope.selectedP = {};
        //dataservice
        $scope.city = DataService.get_cities();
        $scope.changecity = function(city){
          console.log(city);          
          $scope.location = DataService.get_location(city);
        }
        $scope.changelocation = function(locations){
          console.log(typeof eval(locations));
          locations = eval(locations);
          $scope.map.setCenter(new google.maps.LatLng(locations[0], locations[1]));
          $scope.map.setZoom(13);

        }


        NgMap.getMap().then(function(map) {
          $scope.map = map;
        });

        var ref = firebase.database().ref().child("locations");
        $scope.locations = $firebaseArray(ref);
        console.log($scope.locations);

        // $scope.locations.$add({
        //   name: "sulur",
        //   desc: "sulur sulur",
        //   position: [13.0332, 78.0277]
        // });

        $scope.showInfo = function(eve, p) {
          console.log(eve, p);
          $scope.selectedP = p;
          $scope.map.showInfoWindow('map-info-window', this);
        }
      }
    })
    .state('login', {
      url: '/login',
      templateUrl: 'tpl/login.html',
      controller: function($scope) {
        $scope.loginForm = {};
        $scope.login = function(){
          console.log($scope.loginForm);
          firebase.auth().signInWithEmailAndPassword($scope.loginForm.email, $scope.loginForm.password).then(function(user) {
            console.log(user);
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
          });
        }
      }
    })
    .state('register', {
      url: '/register',
      templateUrl: 'tpl/register1.html',
      controller: function($scope){
        $scope.registerForm = {};
        $scope.register = function(){
          console.log($scope.registerForm);
          firebase.auth().createUserWithEmailAndPassword($scope.registerForm.email, $scope.registerForm.password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
          });
        }
      }
      // templateUrl: 'tpl/register.html'
    })
    .state('result', {
      url: '/result',
      templateUrl: 'tpl/result.html',
      controller: 'ListController'
    })
    .state('detail', {
      url:'/details/:itemId',
      templateUrl: 'tpl/detail.html',
      controller: 'ListController'
    });
});


 // $scope.positions =[
        //   [11.0168, 76.9558],
        //   [11.0104, 76.9499],
        //   [11.0332, 77.0277],
        //   [10.9891, 77.0227],
        //   [11.0464, 76.9458]
        // ];