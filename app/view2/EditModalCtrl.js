'use strict';

angular
    .module('myApp.view2')
    .controller('EditModalCtrl', ['$scope', '$modalInstance', '$firebase', 'vitamin' ,
        function($scope, $modalInstance, $firebase, vitamin) {

        $scope.vitamin = vitamin;

        //TODO: Move under users
        /*
        var ref = new Firebase("https://vivid-fire-4038.firebaseio.com/Vitamins");
        var fb = $firebase(ref);

        // sync as object
        var syncObject = fb.$asObject();

        // three way data binding
        syncObject.$bindTo($scope, 'vitamins');
        */

    }]);