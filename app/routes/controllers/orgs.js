'use strict';

module.exports = function($scope, orgs, Org) {
  $scope.orgs = orgs;

  $scope.removeOrg = function (org, index) {
    org.remove().then(function () {
      $scope.orgs.splice(index, 1)
    })
  }

};