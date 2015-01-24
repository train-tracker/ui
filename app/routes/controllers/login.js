'use strict';

module.exports = function($scope, User) {
    $scope.login = function (user) {
        // Handle login
        User.post(user).then(function(response) {
            console.log(response)
        }).finally(function() {
            console.log("Finally!");
        });
    }
}