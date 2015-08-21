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
      .when('/:math/:first/:second', {
        templateUrl: 'partials/math.html',
        controller: 'AdditionController'
      })
      .otherwise({redirectTo: "/"})

      $locationProvider.html5Mode(true)
});

app.controller("Header", function($scope, $location){
  $scope.getUrl = function(){
    return $location.url()
  }
})

app.controller("AdditionController", function($scope, $routeParams){
  if($routeParams.math === "add"){
      $scope.add = parseInt($routeParams.first) + parseInt($routeParams.second)
  } else if ($routeParams.math === "divide"){
      $scope.divide = parseInt($routeParams.first) / parseInt($routeParams.second)
  } else if ($routeParams.math === "multiply"){
      $scope.multiply = parseInt($routeParams.first) * parseInt($routeParams.second)
  }
})

app.controller("HomeController", function($scope, $location, $http){
  $scope.greeting = "Hello to the home view!",
  $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    }
    $http.get('https://api.github.com/zen').then(function(data){
    $scope.zenData = data.data;
    })
    $http.get("../itunes.json").then(function(itunes){
      console.log(itunes.results)
      $scope.itunesData = itunes.data.results
    })
    $http.get("https://httlkajsdlfjasf.com").then(function(junk){
      $scope.blah = junk
    }, function(response){
      $scope.errorResponse = response.config.url + " is not a great website. Choose a new one!"
    })
});

app.controller("ProjectsController", function($scope, $location){

})

app.controller("BioController", function($scope, $location){

})
app.controller("ResumeController", function($scope, $location){
  $scope.greeting = "hello_there_4",
  $scope.greeting1 = "hello_there_4",
  $scope.sentence = "My dog Rusty is cool!"
})

app.filter('kebab', function () {
  return function (input) {
      return input.toString().replace(/_/g , "-");
  };
});

app.filter("redact", function(){
  return function(input, word) {
    return input.replace(word, "REDACTED")
  }
})

app.filter('camel', function() {
  return function(input){
    var temp = "";
    input.split("_").forEach(function(value, i){
      if(i != 0){
      var first = value.substring(0,1).toUpperCase();
      var second = value.substring(1);
      value = first+second
      }
      temp += value
    })
    value = temp
    return value
    }
  })
