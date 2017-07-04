module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
          development: {
            options: {
              style: 'expanded'
            },
            files: {
              "css/style.css": "sass/style.scss"
            }
          }
      },
      
      watch: {
        files: ["sass/**/*.scss"],
        tasks: ["scsslint", "sass"]
      },
      
      uglify: {
        development: {
          files: {
            'js/main.min.js': ["js/jquery-2.1.1.min.js", "js/materialize.min.js", "js/init.js", "js/main.js"]
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

    grunt.registerTask( "default", ["scsslint", "sass", "uglify"]);
};