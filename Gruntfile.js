module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        copy: {
          main: {
            files: [
              {
               expand: true,
               src: ['js/*'],
               dest: 'dist/'
              }
            ]
          }
        },

        sass: {
          main: {
            options: {
              style: 'compressed'
            },
            files: {
              "css/style.min.css": "sass/style.scss"
            }
          }
      },
      
      watch: {
        files: ["sass/**/*.scss", "js/*.js", "js/vendors/*.js"],
        tasks: ["copy", "scsslint", "sass"]
      },
      
      'node-minify': {
        staging: {
          files: {
            'dist/js/main.js': ["js/main.js"],
            'dist/js/foodcounter.js': ["js/foodcounter.js"],
            'dist/js/mixpanel.js': ["dist/js/mixpanel.js"],
            'dist/js/map.js': ["dist/js/map.js"]
          }
        },
        production: {
          files: {
            'dist/js/main.js': ["js/main.js"],
            'dist/js/foodcounter.js': ["js/foodcounter.js"],
            'dist/js/mixpanel.js': ["dist/js/mixpanel.js"],
            'dist/js/map.js': ["dist/js/map.js"]
          }
        }

      },

      scsslint: {
      src: [
        'sass/pages/*.scss',
        'sass/abstracts/*.scss'
      ],
      options: {
        config: 'sass-lint.yml',
        colorizeOutput: true
      }
    },
    'regex-replace': {
          dev: {
            src: ['dist/js/mixpanel.js'],
            actions: [{
              name: 'mixpanel',
              search: '// mixpanel_token',
              replace: 'mixpanel.init(\'afb672ef8b057d8aae64ad1a7d4be2d5\');',
              flags: 'g'
            }]
          },
          staging: {
            src: ['dist/js/mixpanel.js'],
            actions: [{
              name: 'mixpanel',
              search: '// mixpanel_token',
              replace: 'mixpanel.init(\'afb672ef8b057d8aae64ad1a7d4be2d5\');',
              flags: 'g'
            }]
          },
          production: {
            src: ['dist/js/mixpanel.js'],
            actions: [{
              name: 'mixpanel',
              search: '// mixpanel_token',
              replace: 'mixpanel.init(\'f0201f4e31bd69669f4412c3b03f7084\');',
              flags: 'g'
            }]
          }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-node-minify');
    grunt.loadNpmTasks('grunt-scss-lint');
    grunt.loadNpmTasks('grunt-regex-replace');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask( "default", ["copy", "scsslint", "sass",'regex-replace:dev']);
    grunt.registerTask( "deploy-staging", ["copy", "sass",'regex-replace:staging', "node-minify:staging"]);
    grunt.registerTask( "deploy-production", ["copy",  "sass",'regex-replace:production', "node-minify:production"]);
};