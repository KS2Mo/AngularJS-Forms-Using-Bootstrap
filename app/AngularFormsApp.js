//var angularFormsApp = angular.module('angularFormsApp', ['ngRoute','ui.bootstrap']);

//angularFormsApp.config(function ($routeProvider) {
//    $routeProvider
//        .when("/home", {
//            templateUrl: "app/Home.html",
//            controller: "HomeController"
//        })
//        .when("/newEmployeeForm", {
//            templateUrl: "app/EmployeeForm/efTemplate.html",
//            controller: "efController"
//        })
//        .when("/updateEmployeeForm/:id", {
//            templateUrl: "app/EmployeeForm/efTemplate.html",
//            controller: "efController"
//        })
//        .otherwise({
//            redirectTo: "/home"
//        });
//});

var angularFormsApp = angular.module('angularFormsApp', ["ngRoute", "ui.bootstrap"]);

angularFormsApp.config(function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "app/Home.html",
            controller: "HomeController"
        })
        .when("/newEmployeeForm", {
            templateUrl: "app/EmployeeForm/efTemplate.html",
            controller: "efController"
        })
        .when("/updateEmployeeForm/:id", {
            templateUrl: "app/EmployeeForm/efTemplate.html",
            controller: "efController"
        })
        .otherwise({
            redirectTo: "/home"
        });
});

angularFormsApp.controller("HomeController",
    function ($scope, $location, DataService) {

        $scope.showCreateEmployeeForm = function () {
            $location.path('/newEmployeeForm');
        };

        $scope.showUpdateEmployeeForm = function (id) {
            $location.path('/updateEmployeeForm/' + id)
        };

    });

//angularFormsApp.controller("HomeController",
//    function ($scope, $location, $modal,DataService) {

//        $scope.showCreateEmployeeForm = function () {
//            $location.path('/newEmployeeForm');
//            $model.open({
//                templateUrl: 'app/EmployeeForm/efTemplate.html',
//                controller: 'efController'
//            })
//        };

//        $scope.showUpdateEmployeeForm = function (id) {
//            $location.path('/updateEmployeeForm'+id);
//        };
//    });