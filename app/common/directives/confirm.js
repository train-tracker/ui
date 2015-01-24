'use strict';

module.exports = function () {
  return {
    scope: {
      callback: '&',
      message: '@',
      action: '@'
    },
    restrict: 'A',
    controller: function ($scope, $modal) {

      var modalInstance
      $scope.action = $scope.action || "Ok"

      $scope.open = function () {
        modalInstance = $modal.open({
          template: require('./views/confirm')(),
          scope: $scope,
          controller: function ($scope, $modalInstance) {
            $scope.$on('enterDown', function () {
              console.log('enter')
            })
          }
        })

        modalInstance.result.then(function() {
          $scope.callback()
        })
      }
    },
    link: function (scope, element, attrs) {
      element.on('click', scope.open);
    }
  }
}