angular.module('routes', ['ui.router'])
  .controller('error-handler', require('./controllers/error-handler'))
  .controller('home', require('./controllers/home'))
  .controller('login', require('./controllers/login'))
  .controller('signup', require('./controllers/signup'))
  .controller('user', require('./controllers/user'))

  .controller('admin', require('./controllers/admin'))
  .controller('admin.modules', require('./controllers/admin/modules'))
  .controller('admin.modules.create-edit', require('./controllers/admin/modules-create-edit'))
  .controller('admin.modules.questions', require('./controllers/questions'))

  .controller('modules', require('./controllers/modules'))
  .controller('modules.start', require('./controllers/modules/start'))

  .controller('classes', require('./controllers/classes'))
  .controller('courses.create-edit', require('./controllers/courses/create-edit'))
  .controller('orgs', require('./controllers/orgs'))
  .controller('orgs.create-edit', require('./controllers/orgs/create-edit'))
  .controller('courses', require('./controllers/courses'))
  .controller('courses.create-edit', require('./controllers/courses/create-edit'))
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
      // Test route
      .state('test', {
        url: '/test',
        template: require('./views/test'),
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
        abstract: true,
        template: require('./views/admin'),
        // controller: 'admin'
      })



      /**
       * Admin Module
       */



      .state('admin.modules', {
        url: '/modules',
        template: require('./views/admin/modules'),
        controller: 'admin.modules',
          resolve: {
            modules: function(Module) {
              return Module.getList();
            }
          }
      })
      .state('admin.modules.create', {
        url: '/create',
        template: require('./views/admin/modules-create-edit'),
        controller: 'admin.modules.create-edit',
        resolve: {
          module: function () {
            return {}
          }
        }
      })
      .state('admin.modules.edit', {
        url: '/:id',
        template: require('./views/admin/modules-create-edit'),
        controller: 'admin.modules.create-edit',
        resolve: {
          module: function (modules, $stateParams) {
            return _.find(modules, {id: $stateParams.id})
          }
        }
      })
      .state('admin.modules.questions', {
        url: '/:moduleID/questions',
        template: require('./views/questions/index'),
        controller: 'admin.modules.questions',
        resolve: {
          questions: function(modules, $stateParams) {
            var module = _.find(modules, {id: $stateParams.moduleID})
            return module.getQuestions()
          }
        }
      })

      /**
       * Modules
       */
      .state('modules', {
        url: '/modules',
        template: require('./views/modules/index'),
        controller: 'modules',
        resolve: {
          modules: function (Module) {
            return Module.getList()
          }
        }
      })
      .state('modules.start', {
        url: '/:moduleID?currentQuestion',
        views: {
          '@': {
            template: require('./views/modules/start'),
            controller: 'modules.start',
            resolve: {
              module: function (modules, $stateParams) {
                return _.find(modules, {id: $stateParams.moduleID})
              },
              questions: function (module) {
                return module.getQuestions()
              }
            }
          }
        }
      })

      // /**
      //  * Organization Routes
      //  */
      // .state('orgs', {
      //   url: '/orgs',
      //   template: require('./views/orgs'),
      //   controller: 'orgs',
      //   resolve: {
      //      orgs: function(Orgs) {
      //        return Orgs.getList();
      //       }
      //     }
      // })
      // .state('orgs.create', {
      //   url: '/create',
      //   template: require('./views/orgs/create-edit'),
      //   controller: 'orgs.create-edit',
      //   resolve: {
      //     org: function () {
      //       return {}
      //     }

      //   }
      // })
      // .state('orgs.edit', {
      //   url: '/:id',
      //   template: require('./views/orgs/create-edit'),
      //   controller: 'orgs.create-edit',
      //   resolve: {
      //     org: function (orgs, $stateParams) {
      //       return _.find(orgs, {id: $stateParams.id})
      //     }
      //   }
      // })

      // /**
      //  * Class Routes
      //  */
      // .state('classes', {
      //   url: '/classes',
      //   template: require('./views/classes'),
      //   controller: 'classes',
      //     resolve: {
      //         modules: function(Class) {
      //             return Class.getList();
      //         }
      //     }
      // })
      // .state('classes.create', {
      //   url: '/create',
      //   template: require('./views/classes/create-edit'),
      //   controller: 'classes.create-edit',
      //   resolve: {
      //     org: function () {
      //       return {}
      //     }

      //   }
      // })
      // .state('classes.edit', {
      //   url: '/:id',
      //   template: require('./views/classes/create-edit'),
      //   controller: 'classes.create-edit',
      //   resolve: {
      //     org: function (orgs, $stateParams) {
      //       return _.find(orgs, {id: $stateParams.id})
      //     }
      //   }
      // })

      // /**
      //  * Course Routes
      //  */
      // .state('courses', {
      //   url: '/courses',
      //   template: require('./views/courses'),
      //   controller: 'courses',
      //     resolve: {
      //         courses: function(Courses) {
      //             return Courses.getList();
      //         }
      //     }
      // })
      // .state('courses.create', {
      //   url: '/create',
      //   template: require('./views/courses/create-edit'),
      //   controller: 'courses.create-edit',
      //   resolve: {
      //     org: function () {
      //       return {}
      //     }

      //   }
      // })
      // .state('courses.edit', {
      //   url: '/:id',
      //   template: require('./views/courses/create-edit'),
      //   controller: 'courses.create-edit',
      //   resolve: {
      //     org: function (orgs, $stateParams) {
      //       return _.find(orgs, {id: $stateParams.id})
      //     }
      //   }
      // })
  })
