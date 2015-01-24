'use strict';

module.exports = function($scope, User, $http, API_ROOT) {
    $scope.login = function (user) {
        // Handle login
        $http.post(API_ROOT + '/login', user).success(function(){
            console.log(response)
        }).finally(function() {
            console.log("Finally!");
        });
    }
}