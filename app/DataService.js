

angularFormsApp.factory('DataService',
    function () {
        var getEmployee = function (id) {
            if (id == 123) {
                return {
                    id: 123,
                    fullName: "Milton Waddams",
                    notes: "The ideal employee.  Just don't touch his red stapler.",
                    department: "Administration",
                    dateHired: "July 11 2014",
                    breakTime: "July 11 2014 3:00 PM",
                    perkCar: true,
                    perkStock: false,
                    perkSixWeeks: true,
                    payrollType: "none"
                };
            }
            return undefined;
        };

        var insertEmployee = function (newEmployee) {
            return true;
        };

        var updateEmployee = function (employee) {
            return true;
        };

        return {
            insertEmployee: insertEmployee,
            updateEmployee: updateEmployee,
            getEmployee: getEmployee
        };
    });



//angularFormsApp.factory('DataService',
//    function () {
//        var getEmployee = function (id) {
//            if (id == 123) {
//                return {
//                    id: 123,
//                    fullName: "Milton Wadams",
//                    notes: "The ideal employee. Just don't touch his red ",
//                    department: "Administraation",
//                    dataHired: "July 11 2014",
//                    breakTime: "July 11 2014 3:00 PM",
//                    perkCar: true,
//                    perkStock: false,
//                    perkSixWeeks: true,
//                    payrollType: "none"
//                };
//            }
//            return undifined;
//        };

//        var insertEmployee = function (newEmployee) {
//            return true;
//        }

//        var updateEmployee = function (employee) {
//            return true;
//        }

//        return {
//            insertEmployee: insertEmployee,
//            updateEmployee: updateEmployee,
//            getEmployee: getEmployee
//        }
//    });