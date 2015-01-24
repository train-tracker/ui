'use strict';

module.exports = function($scope, course, courses, $state) {
  if(_.isEmpty(course)){
    $scope.creating = true
    $scope.course = {}
  } else {
    $scope.editing = true
    $scope.course = course
  }

  $scope.submitCourse = function (course) {
    var promise
    if($scope.creating) {
      promise = courses.post(course).then(function (course) {
        $scope.courses.push(course)
        $scope.course = {}
        $scope.creating = false
      })
    } else {
      promise = course.put().then(function (course) {
        $scope.courses = {}
        $scope.editing = false
      })
    }

    promise.finally(function () {
      $state.go('courses')
    })
  }
};