'use strict';

angular.module('myApp.view1', ['ngRoute', 'firebase', 'ui.bootstrap',])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', '$firebase', function($scope, $firebase) {
    var ref = new Firebase("https://vivid-fire-4038.firebaseio.com/users");
    var fb = $firebase(ref);

    // sync as object
    var syncObject = fb.$asObject();

    // three way data binding
    syncObject.$bindTo($scope, 'users');

   $scope.debug = function(){
       console.log($scope);
   };

    $scope.reset = function() {
        fb.$set(
            {
                username: 'Attila',
                days: [
                    {date: 0, breakfast: '', morningSnack: '', lunch : '', afternoonSnack:'', dinner: ''},
                    {date: 1, breakfast: '', morningSnack: '', lunch : '', afternoonSnack:'', dinner: ''},
                    {date: 2, breakfast: '', morningSnack: '', lunch : '', afternoonSnack:'', dinner: ''}
                ]
            });

      console.log('reset');
    };
}]);