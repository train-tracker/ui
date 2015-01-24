module.exports = function ($httpProvider) {
  $httpProvider.interceptors.push('httpInterceptors');
}