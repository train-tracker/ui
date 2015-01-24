'use strict';

module.exports = function($scope, questions) {
  $scope.questions = questions
  $scope.saving = {}
  $scope.newQuestion = {choices:[]}

  $scope.saveQuestion = function (question) {
    $scope.saving[question.id] = true
    question.put().finally(function () {
      $scope.saving[question.id] = false
    })
  }

  $scope.deleteQuestion = function (question, index) {
    question.remove().then(function () {
      $scope.questions.splice(index, 1)
    })
  }

  $scope.addChoice = function (question, choice) {
    if(!choice.text.length)
      return;
    question.choices.push(angular.copy(choice))
    choice.text = ""
  }

  $scope.addNewQuestion = function (question) {
    $scope.questions.post(question).then(function(response) {
      $scope.questions.push(response)
      $scope.newQuestion = {choices: []}
      $scope.newQuestionShowing = false
    })
  }

}