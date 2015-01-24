require('./configuration/index')
require('./common/index')
require('./routes/index')

angular.module('app',
  [
    'configuration',

    'ui.router',
    'ui.bootstrap',
    'restangular',
    'xeditable',

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
  .config(require('./configuration/http'))
  .run(require('./bootstrap/session'))
  .run(function(editableOptions, editableThemes) {
    editableOptions.theme = 'bs3';

    editableThemes['bs3'].submitTpl = '<button class="btn btn-primary"type="submit">Save</button>';
    editableThemes['bs3'].cancelTpl = '<button class="btn "type="submit">Cancel</button>';
  })