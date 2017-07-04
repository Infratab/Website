module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
          dev: {
            options: {
              style: 'compressed'
            },
            files: {
              "css/style.css": "sass/style.scss"
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
            'dist/js/main.min.js': ["js/jquery-2.1.1.min.js", "js/materialize.min.js", "js/init.js", "js/main.js"]
          }
        },
        staging: {
          files: {
            'dist/js/main.min.js': ["js/jquery-2.1.1.min.js", "js/materialize.min.js", "js/init.js", "js/main.js"]
          }
        },
        production: {
          files: {
            'dist/js/main.min.js': ["js/jquery-2.1.1.min.js", "js/materialize.min.js", "js/init.js", "js/main.js"]
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
    grunt.registerTask("deploy-staging", ['scsslint', 'sass', 'uglify:staging' ]);
    grunt.registerTask("deploy-production", ['scsslint', 'sass', 'uglify:production' ]);
};