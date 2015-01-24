/*
 * See license.txt for license information.
 */


module.exports = function(Restangular) {
    var Modules = Restangular.all('modules');


    // add custom methods to individual user and imports
    Restangular.extendModel('modules', function(module){
      if(!('one' in module))
        return module;

      module.getQuestions = function() {
        return module.getList('questions')
      }

      return module;
    });

    return Modules;
}