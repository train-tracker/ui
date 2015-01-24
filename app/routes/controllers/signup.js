'use strict';

module.exports = function($scope, $rootScope, User, $http, API_ROOT) {

  $rootScope.title = "Register"

  $scope.register = function (user) {
    User.register(user).then(function (user) {
      $rootScope.user = user;
    })
  }

}