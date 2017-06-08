module.exports = function (grunt) {
  var environment = grunt.option('target') || 'dev';
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

      scsslint: {
          src: [
           
            'sass/pages/_home.scss'
            
         ],
        options: {
          config: 'sass-lint.yml',
          colorizeOutput: true
        }
      },
        watch: {
          files: ["sass/**/*.scss"],
          tasks: ["scsslint", "sass"]
        }
      });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-scss-lint');
     grunt.registerTask( "default", ["scsslint", "sass", "watch"]);
    grunt.registerTask("deploy", ['scsslint', 'sass', + environment ]);
};
