'use strict';

module.exports = function($scope, orgs) {

  $scope.orgs = orgs;

  $scope.submitOrgs = function (orgs, creating) {
    if(creating) {
      orgs.post(module).then(function (module) {
        $scope.orgs.push(module)
        $scope.module = {}
        $scope.creating = false
      })
    } else {
      module.put().then(function (orgs) {
        $scope.module = {}
        $scope.editing = false
      })
    }
  }

  $scope.removeModule = function (orgs, index) {
    module.remove().then(function () {
      $scope.orgs.splice(index, 1)
    })
  }

  $scope.editModule = function (orgs) {
    $scope.module = module
    $scope.editing = true
  }

};