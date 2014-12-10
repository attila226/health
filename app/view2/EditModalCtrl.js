'use strict';


angular
    .module('myApp.view2')
    .controller('EditModalCtrl', ['$scope', '$firebase', function($scope, $firebase) {
        //TODO: Move under users
        var ref = new Firebase("https://vivid-fire-4038.firebaseio.com/Vitamins");
        var fb = $firebase(ref);

        // sync as object
        var syncObject = fb.$asObject();

        // three way data binding
        syncObject.$bindTo($scope, 'vitamins');

    }]);