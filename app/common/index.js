require('./directives/index')
require('./resources/index')
require('./services/index')

angular.module('common', ['directives', 'resources', 'services'])
  .factory("Module", require("./resources/modules"))
  .factory("Class", require("./resources/classes"))
  
  
  
  
  
  
  ;