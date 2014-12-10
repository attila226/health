'use strict';

angular.module('myApp.view2', ['ngRoute', 'firebase', 'ui.bootstrap', 'smart-table'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope', '$firebase', '$modal', function($scope, $firebase, $modal) {
      //TODO: Move under users
      var ref = new Firebase("https://vivid-fire-4038.firebaseio.com/Vitamins");
      var fb = $firebase(ref);

      // sync as object
      var syncObject = fb.$asObject();

      // three way data binding
      syncObject.$bindTo($scope, 'vitamins');

      //$scope.vitamins = getSchedule();

    function getSchedule() {
        return[
          {Vitamin: 'LivCo', Morning: 0, Breakfast: 2, Lunch: 0, Afternoon: 0, Dinner: 2, Night: 0},
          {Vitamin: 'Prosymbotic', Morning: 3, Breakfast: 0, Lunch: 0, Afternoon: 0, Dinner: 0, Night: 0},
          {Vitamin: 'Catalyn', Morning: 0, Breakfast: 3, Lunch: 0, Afternoon: 0, Dinner: 3, Night: 0},
          {Vitamin: 'Zypan', Morning: 0, Breakfast: 3, Lunch: 3, Afternoon: 0, Dinner: 3, Night: 0},
          {Vitamin: 'Vitamin D', Morning: 0, Breakfast: 0, Lunch: 0, Afternoon: 0, Dinner: 1, Night: 0},
          {Vitamin: 'Magnesium', Morning: 0, Breakfast: 0, Lunch: 0, Afternoon: 0, Dinner: 2, Night: 0},
          {Vitamin: 'Glycogenics', Morning: 0, Breakfast: 0, Lunch: 2, Afternoon: 0, Dinner: 0, Night: 0},
          {Vitamin: 'Omega', Morning: 0, Breakfast: 0, Lunch: 2, Afternoon: 0, Dinner: 0, Night: 0},
          {Vitamin: 'Vitamin C', Morning: 0, Breakfast: 2, Lunch: 0, Afternoon: 0, Dinner: 0, Night: 0}
        ];
    };

    $scope.edit = function(index){
        var modalInstance = $modal.open({
            templateUrl: 'view2/editModal.html',
            controller: 'EditModalCtrl',
            resolve: {
                vitamin: function () {
                    return $scope.vitamins[index];
                }
            }
        });

        modalInstance.result.then(function (selectedItem) {
            $scope.selected = selectedItem;
        }, function () {
            //$log.info('Modal dismissed at: ' + new Date());
        });
    };

}]);