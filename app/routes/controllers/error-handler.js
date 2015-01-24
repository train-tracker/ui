module.exports = function($scope, $modal, $state) {

  $scope.$watch('areErrors', function (areErrors) {
    if(!areErrors)
      return;

    var controller, template
    if($scope.error.status = 403) {
      controller = 'login'
      template = '/login.html'
    } else {
      controller = 'default'
      template = '/default.html'
    }

    var modalInstance = $modal.open({
      templateUrl: template,
      controller: controllers[controller],
      background: 'true'
    })

  })

  var controllers = {
    login: function($scope, User, $http, API_ROOT) {
      $scope.login = function (user) {

        // Handle login
        $http.post(API_ROOT + '/login', user).success(function(){
          $state.go('user')
          $scope.$dismiss()
        }).finally(function() {
        });

      }
    }
  }

}