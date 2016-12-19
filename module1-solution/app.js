(function () {
'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.lunchmenu="";

    $scope.checkIfTooMuch = function () {


      var numMeals = $scope.lunchmenu.split(",");
      console.log(numMeals);
      if ($scope.lunchmenu == "") {
        $scope.message="Please enter data first";
      } else if (numMeals.length <= 3) {
        $scope.message="Enjoy";
      } else  {
        $scope.message="Too much";
      }

    };

  }


})();
