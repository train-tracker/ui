'use strict';

module.exports = function($scope, questions) {
  $scope.questions = questions
  $scope.saving = {}

  $scope.saveQuestion = function (question) {
    $scope.saving[question.id] = true
    question.put().finally(function () {
      $scope.saving[question.id] = false
    })
  }

  $scope.deleteQuestion = function (question, index) {
    // @todo: confirm first before deleting
    question.remove().then(function () {
      $scope.questions.splice(index, 1)
    })
  }

}