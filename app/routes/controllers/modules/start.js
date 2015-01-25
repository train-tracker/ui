'use strict';

module.exports = function($scope, module, questions, $stateParams) {
  $scope.module = module
  $scope.questions = questions
  $scope.answers = {}
  $scope.showVideo = true
  $scope.showQuiz = false

  for (var i = 0; i < questions.length; i++) {
    $scope.answers[questions[i].id] = {}
  };

  $scope.currentQuestion = $scope.questions[$stateParams.currentQuestion] || $scope.questions[0]

  $scope.gradeQuiz = function (answers) {
    var isError = false
    for(var questionID in answers){
      var question =  _.find($scope.questions, {id: questionID})
      if(question.correct != answers[questionID].answer * 1 || !answers[questionID].answer) {
        isError = true
        answers[questionID].error = true
      } else {
        answers[questionID].error = false
      }
    };

    if(isError) {
      console.log('errored!')
    } else {
      console.log('passed!')
    }
  }

  $scope.setVideoTime = function (module, question) {
    $scope.showVideo = true
    module.video += '#t=' + question.from + ',' + question.to
  }
};