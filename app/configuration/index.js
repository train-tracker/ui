var configuration = {
   'API_ROOT':'http://dockerhost'
}


// Create the config object

// Setup the configuration
var constants = typeof globalConstants == 'undefined' ? configuration : globalConstants;

var config = angular.module('configuration', []);
for(name in constants) {
  config.constant(name, constants[name]);
}