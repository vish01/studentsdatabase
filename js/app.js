 'use strict'
 // create the module and name it scotchApp
var scotchApp = angular.module('scotchApp',['ngRoute', 'ngFileUpload']);
// var scotchApp = angular.module('scotchApp', ['ngFileUpload']);

// configure our routes
scotchApp.config(function($routeProvider){
$routeProvider
.when('/',{
//route for home page
    templateUrl : 'views/home.html',
    controller : 'mainController'
})
//route for about page
.when('/cis300',{
templateUrl : 'views/cis300/cis300.html',
controller : 'cis300Controller'
})
//route for contact page
.when('/cis400', {
templateUrl : 'views/cis400/cis400.html',
controller : 'cis400Controller'

})
.when('/home', {
    templateUrl : 'views/home.html',
    controller : 'homeController'
    
    })
.when('/login',{
    templateUrl : 'views/login.html',
    controller : 'loginController'
    });
});


// create the controller and inject Angular's $scope
    scotchApp.controller('mainController', function($scope){
//create a message to display in our view
$scope.message = 'Welcome to the CIS Course Enrollment Center!';
});

scotchApp.controller('homeController', function($scope){
$scope.message = 'You have successfully logged in!';
});
    
scotchApp.controller('loginController', function($scope, $location){

    $scope.records = [{name:'abc', id:123},{name:'hew', id:678}];
    $scope.submit = function(){
        var uname= $scope.username;
        var password= $scope.password;

        if($scope.username=='admin' && $scope.password=='admin')
        {
            $location.path('/home');
        }
        else{
            alert('Wrong Details, Please try again');
        }
    };
});