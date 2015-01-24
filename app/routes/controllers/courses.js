'use strict';

module.exports = function($scope, courses) {
  $scope.courses = courses;

  $scope.removeCourse = function (course, index) {
    course.remove().then(function () {
      $scope.courses.splice(index, 1)
    })
  }

};