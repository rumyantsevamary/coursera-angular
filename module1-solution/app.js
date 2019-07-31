(function () {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', FAController);


    FAController.$inject = ['$scope'];
    function FAController($scope) {
        $scope.list = '';
        $scope.message = '';

        $scope.showMessage = function () {
            $scope.message = getMessageText();
        }


        function calculateFood(foodListStr) {
            var foodListArr = foodListStr.split(',');
            return foodListArr.length;

        };

        function getMessageText() {
            if (!$scope.list) {
                return 'Please enter data first';
            }
            var numberOfFood = calculateFood($scope.list);

            if (numberOfFood <= 3) {
                return 'Enjoy!';
            } else {
                return 'Too much!';
            }

        };

    }
})();