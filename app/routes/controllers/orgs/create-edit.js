'use strict';

module.exports = function($scope, org, orgs, $state) {
  if(_.isEmpty(org)){
    $scope.creating = true
    $scope.org = {}
  } else {
    $scope.editing = true
    $scope.org = org
  }

  $scope.submitOrg = function (org) {
    var promise
    if($scope.creating) {
      promise = orgs.post(org).then(function (org) {
        $scope.orgs.push(org)
        $scope.org = {}
        $scope.creating = false
      })
    } else {
      promise = org.put().then(function (org) {
        $scope.orgs = {}
        $scope.editing = false
      })
    }

    promise.finally(function () {
      $state.go('orgs')
    })
  }
};