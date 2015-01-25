'use strict';

module.exports = function($scope, module, modules, $state) {
  if(_.isEmpty(module)){
    $scope.creating = true
    $scope.module = {}
  } else {
    $scope.editing = true
    $scope.module = module
  }

  $scope.submitModule = function (module) {
    var promise
    if($scope.creating) {
      promise = modules.post(module).then(function (module) {
        $scope.modules.push(angular.copy(module))
        $scope.module = {}
        $scope.creating = false
      })
    } else {
      promise = module.put().then(function (module) {
        $scope.module = {}
        $scope.editing = false
      })
    }

    promise.finally(function () {
      $state.go('^')
    })
  }
};