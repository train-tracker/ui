'use strict';

module.exports = function($scope, module, modules) {
  if(_.isEmpty(module)){
    $scope.creating = true
    $scope.module = {}
  } else {
    $scope.editing = true
    $scope.module = module
  }

  $scope.submitModule = function (module) {
    if($scope.creating) {
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
};