var app = angular.module('mouseOverDirectiveApp', ['ngRoute'])

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeController'
      })
      .when('/dogs', {
        templateUrl: 'partials/dogs.html',
        controller: 'DogsController'
      })
      .otherwise({redirectTo: "/"})

      $locationProvider.html5Mode(true)
});

app.controller("HomeController", function($scope){
  $scope.greeting = "Hello to the home view!"
})

app.controller("DogsController", function($scope){
  $scope.greeting = "Hello to the dogs view!"
})

app.directive('gsChangeBackground', function() {
  return {
    link: function(scope, element, attrs) {

      var oldColor = element.css('background-color');

      element.on('mouseenter', function(event) {
        element.css('background-color', scope.color);
      });

      element.on('mouseleave', function(event) {
        element.css('background-color', oldColor);
      })
    }
  };
});
