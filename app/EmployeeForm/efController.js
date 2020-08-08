angularFormsApp.controller('efController',
    function efController($scope, $window, $routeParams, DataService) {

        if ($routeParams.id)
            $scope.employee = DataService.getEmployee($routeParams.id);
        else
            $scope.employee = { id: 0 };

        $scope.editableEmployee = angular.copy($scope.employee);

        $scope.shouldShowFullName = function () {
            return true;
        };

        $scope.departments = [
            "Engineering",
            "Marketing",
            "Finance",
            "Administration"
        ];

        $scope.topProgrammingLanguage = [
            "c",
            "c#",
            "c++",
            "java script",
            "java",
            "pascal",
            "perl",
            "php"
        ];

        $scope.hoveringOver = function (value) {
            $scope.overStar = value;
            $scope.percent = 100 * (value / 10);
        };
        
        $scope.submitForm = function () {

            $scope.$broadcast('show-errors-event');

            if ($scope.employeeForm.$invalid)
                return;

            console.log("submitForm");
            if ($scope.editableEmployee.id == 0) {
                //Insert New Employee
                DataService.insertEmployee($scope.editableEmployee);
            }
            else {
                //Update New Employee
                DataService.updateEmployee($scope.editableEmployee);
            }


            $scope.employee = angular.copy($scope.editableEmployee);
            $window.history.back();

            //$modelInstance.close();
        }

        $scope.cancelForm = function () {
            console.log("cancelForm");
            //$modelInstance.dismiss();
            $window.history.back();
        }

        $scope.resetForm = function () {
            $scope.$broadcast('hide-errors-event');
        }
    });