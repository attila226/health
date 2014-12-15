'use strict';

angular.module('myApp.view1', ['ngRoute', 'firebase', 'ui.bootstrap'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Log', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', '$firebase', function($scope, $firebase) {
    //TODO: Modify to get a single user from an array of users
    var ref = new Firebase("https://vivid-fire-4038.firebaseio.com/users/0/days");
    var fb = $firebase(ref);

    // sync as object
    var syncObject = fb.$asObject();

    // three way data binding
    syncObject.$bindTo($scope, 'days');

   $scope.debug = function(){
       console.log($scope);
   };

    //Need to point to users
    $scope.reset = function() {
        fb.$set(
            [{
                username: 'Attila',
                days: [
                    {date: '12/14/2014', breakfast: 'scrambleded eggs, smoothie', morningSnack: 'Bananna', lunch: 'chicken, vegatables', afternoonSnack: '', dinner: 'small salad'},
                    {date: '12/15/2014', breakfast: '', morningSnack: '', lunch: '', afternoonSnack: '', dinner: ''},
                    {date: '12/16/2014', breakfast: '', morningSnack: '', lunch: '', afternoonSnack: '', dinner: ''}
                ]
            }]);

      console.log('reset');
    };
}]);