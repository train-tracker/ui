'use strict';

module.exports = function($scope, modules) {
  $scope.modules = modules;

  $scope.removeModule = function (module, index) {
    module.remove().then(function () {
      $scope.modules.splice(index, 1)
    })
  }

};