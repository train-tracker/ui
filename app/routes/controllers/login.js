'use strict';

module.exports = function($scope, User, $http) {
    $scope.login = function (user) {
        // Handle login
        $http.post(API_ROOT+'/login', data).success(function(){
            console.log(response)
        }).finally(function() {
            console.log("Finally!");
        });
    }
}