angular.module('routes', ['ui.router'])
  .controller('home', require('./controllers/home'))
  .controller('login', require('./controllers/login'))
  .config(function($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        controller: 'home',
        template: require('./views/home'),

        // This is an example of a resolve
        // It is commented out, because it will cause the route to fail
        //
        // resolve: {
        //   things: function(CoolThings) {
        //     return CoolThings.getList()
        //   }
        // }
      })
      .state('login', {
        url: '/login',
        template: require('./views/login'),
        controller: 'login',
      })
  })