var app = angular.module('newApp', ['ngRoute'])

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeController'
      })
      .when('/projects', {
        templateUrl: 'partials/projects.html',
        controller: 'ProjectsController'
      })
      .when('/bio', {
        templateUrl: 'partials/bio.html',
        controller: 'BioController'
      })
      .when('/resume', {
        templateUrl: 'partials/resume.html',
        controller: 'ResumeController'
      })
      .otherwise({redirectTo: "/"})

      $locationProvider.html5Mode(true)
});

app.controller("Header", function($scope, $location){
  $scope.getUrl = function(){
    return $location.url()
  }
})

app.controller("HomeController", function($scope, $location){
  $scope.greeting = "Hello to the home view!",
  $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    }
})

app.controller("ProjectsController", function($scope, $location){

})
app.controller("BioController", function($scope, $location){

})
app.controller("ResumeController", function($scope, $location){

})
