/**
 * Brunch configuration
 * Based on angular-brunch-seed
 * @type {Object}
 */
exports.config = {
  conventions: {
    assets: /^app\/assets\//,
    ignored: /^(node_modules|(.*?\/)?[_]\w+|test\/)/
  },
  modules: {
    definition: 'commonjs',
    wrapper: 'commonjs'
  },
  paths: {
    'public': '_public'
  },
  files: {
    javascripts: {
      joinTo: {
        'js/app.js': /^app/,
        'js/vendor.js': /^bower_components/,
      }
    },
    stylesheets: {
      joinTo: {
        'css/vendor.css': /^bower_components/,
        'css/app.css': /^app/,
      },
      order: {
        before: ['app/styles/*.less']
      }
    },
    templates: {
      joinTo: {
        'js/views.js': /^app/
      }
    }
  },
  plugins: {
    jade: {
      pretty: true
    },
    uglify: {
      mangle: false,
      compress: true
    }
  }
};
