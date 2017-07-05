module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
          dev: {
            options: {
              style: 'compressed'
            },
            files: {
              "css/style.min.css": "sass/style.scss"
            }
          }
      },
      
      watch: {
        files: ["sass/**/*.scss"],
        tasks: ["scsslint", "sass", "uglify:dev"]
      },
      
      uglify: {
        dev: {
          files: {
            'dist/js/main.min.js': ["js/vendors/*.js", "js/main.js"]
          }
        },
        staging: {
          files: {
            'dist/js/main.min.js': ["js/vendors/*.js", "js/main.js"]
          }
        },
        production: {
          files: {
            'dist/js/main.min.js': ["js/vendors/*.js", "js/main.js"]
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
    }

    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-scss-lint');

    grunt.registerTask( "default", ["scsslint", "sass", "uglify:dev"]);
    grunt.registerTask("deploy-staging", ['sass', 'uglify:staging' ]);
    grunt.registerTask("deploy-production", ['sass', 'uglify:production' ]);
};