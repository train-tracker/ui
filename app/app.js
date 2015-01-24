require('./configuration/index')
require('./common/index')
require('./routes/index')

angular.module('app',
  [
    'configuration',

    'ui.router',
    'restangular',

    'common',
    'routes',
  ]).
  config(function($urlRouterProvider) {

    // Set the default 404 url
    $urlRouterProvider
      .when('', '/')
      .otherwise("/404")
  })
  .config(require('./configuration/restangular'))
