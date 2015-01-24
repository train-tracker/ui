module.exports = ['$rootScope', '$q', '$injector', 'API_ROOT', function($rootScope, $q, $injector, API_ROOT){
  return {
    responseError: function(response){
      if('status' in response.data && response.data.status == '422')
        return $q.reject(response);

      $rootScope.areErrors = true;
      $rootScope.error = response.data;
      return $q.reject(response);
    }
  }
}]