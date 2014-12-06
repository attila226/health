'use strict';

angular.module('myApp.view1', ['ngRoute', 'firebase'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', '$firebase', function($scope, $firebase) {

      var ref = new Firebase("https://vivid-fire-4038.firebaseio.com/users");
      var fb = $firebase(ref);

      $scope.reset = function() {
        fb.$set({user: 'Attila'});
      };

      $scope.reset();
}]);