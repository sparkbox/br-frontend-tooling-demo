module.exports = (grunt) ->
  grunt.config "browserSync",
    browserSync:
      options:
        server:
          baseDir: "./dist"

  grunt.loadNpmTasks "grunt-browser-sync"
