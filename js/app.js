    // create the module and name it scotchApp
var scotchApp = angular.module('scotchApp',['ngRoute']);
// configure our routes
scotchApp.config(function($routeProvider){
$routeProvider
.when('/',{
//route for home page
    templateUrl : 'pages/home.html',
    controller : 'mainController'
})
//route for about page
.when('/about',{
templateUrl : 'pages/about.html',
controller : 'aboutController'
})
//route for contact page
.when('/contact', {
templateUrl : 'pages/contact.html',
controller : 'contactController'

});
});


// create the controller and inject Angular's $scope
    scotchApp.controller('mainController', function($scope){
//create a message to display in our view
$scope.message = 'Welcome to the CIS Course Enrollment Center!';
});

scotchApp.controller('aboutController', function($scope){
$scope.message = 'This is a About Section.';
});

scotchApp.controller('contactController', function($scope){
$scope.message = 'This is the Contact Page';

});
