angular.module('routes', ['ui.router'])
  .controller('error-handler', require('./controllers/error-handler'))
  .controller('home', require('./controllers/home'))
  .controller('login', require('./controllers/login'))
  .controller('signup', require('./controllers/signup'))
  .controller('user', require('./controllers/user'))
  .controller('modules', require('./controllers/modules'))
  .controller('modules.create-edit', require('./controllers/modules/create-edit'))
  .controller('admin', require('./controllers/admin'))
  .controller('classes', require('./controllers/classes'))
  .controller('orgs', require('./controllers/orgs'))
  .controller('courses', require('./controllers/courses'))
  .config(function($stateProvider) {
    $stateProvider

      /**
       * Core Routes
       */
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
      // Static about page
      .state('about', {
        url: '/about',
        template: require('./views/about'),
      })
      // New User signup form
      .state('signup', {
        url: '/signup',
        controller: 'signup',
        template: require('./views/signup'),
      })
      // Password Reset
      .state('reset', {
        url: '/reset',
        template: require('./views/reset'),
      })
      /**
       * User routes
       */
      .state('user', {
        url: '/user',
        template: require('./views/user'),
        controller: 'user',
      })
      .state('user.id', {
        url: '/user/:id',
        template: require('./views/user'),
        controller: 'user',
      })
      /**
       * Admin Routes
       */
      .state('admin', {
        url: '/admin',
        template: require('./views/admin'),
        controller: 'admin',
      })
      /**
       * Organization Routes
       */
      .state('orgs', {
        url: '/orgs',
        template: require('./views/orgs'),
        controller: 'orgs',
          resolve: {
              org: function(Org) {
                  return Org.getList();
              }
          }
      })
      /**
       * Module Routes
       */
      .state('modules', {
        url: '/modules',
        template: require('./views/modules'),
        controller: 'modules',
          resolve: {
              modules: function(Module) {
                  return Module.getList();
              }
          }
      })
      .state('modules.create', {
        url: '/create',
        template: require('./views/modules/create-edit'),
        controller: 'modules.create-edit',
        resolve: {
          module: function () {
            return {}
          }

        }
      })
      .state('modules.edit', {
        url: '/:id',
        template: require('./views/modules/create-edit'),
        controller: 'modules.create-edit',
        resolve: {
          module: function (modules, $stateParams) {
            return _.find(modules, {id: $stateParams.id})
          }
        }
      })
      /**
       * Class Routes
       */
      .state('classes', {
        url: '/classes',
        template: require('./views/classes'),
        controller: 'classes',
          resolve: {
              modules: function(Class) {
                  return Class.getList();
              }
          }
      })
      /**
       * Course Routes
       */
      .state('courses', {
        url: '/courses',
        template: require('./views/courses'),
        controller: 'courses',
          resolve: {
              courses: function(Courses) {
                  return Courses.getList();
              }
          }
      })

  })
