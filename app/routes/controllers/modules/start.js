'use strict';

module.exports = function($scope, module, questions, $stateParams) {
  $scope.module = module
  $scope.questions = questions

  $scope.currentQuestion = $scope.questions[$stateParams.currentQuestion] || $scope.questions[0]
};