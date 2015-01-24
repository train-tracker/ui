'use strict';

module.exports = function($scope, modules) {

  $scope.modules = modules;

  $scope.submitModule = function (module, creating) {
    if(creating) {
      modules.post(module).then(function (module) {
        $scope.modules.push(module)
        $scope.module = {}
        $scope.creating = false
      })
    } else {
      module.put().then(function (module) {
        $scope.module = {}
        $scope.editing = false
      })
    }
  }

  $scope.removeModule = function (module, index) {
    module.remove().then(function () {
      $scope.modules.splice(index, 1)
    })
  }

  $scope.editModule = function (module) {
    $scope.module = module
    $scope.editing = true
  }

};