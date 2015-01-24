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
      // Users
      .state('user', {
        url: '/user',
        template: require('./views/user'),
        controller: 'user',
      })
      // Admins
      .state('admin', {
        url: '/admin',
        template: require('./views/admin'),
        controller: 'admin',
      })
      // Organizations
      .state('orgs', {
        url: '/orgs',
        template: require('./views/orgs'),
        controller: 'orgs',
      })
      // Modules
      .state('modules', {
        url: '/modules',
        template: require('./views/modules'),
        controller: 'modules',
      })
      // Classes
      //.state('classes', {
      //  url: '/classes',
      //  template: require('./views/classes'),
      //  controller: 'classes',
      //})
      // Courses
      .state('courses', {
        url: '/courses',
        template: require('./views/courses'),
        controller: 'courses',
      })
      // Static about page
      .state('about', {
        url: '/about',
        template: require('./views/about'),
      })
      
  })