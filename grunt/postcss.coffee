module.exports = (grunt) ->
  grunt.config "postcss",
    options:
      supportedBrowsers: ["> 5%"]
      processors: [
        require("autoprefixer-core")(browsers: @.supportedBrowsers).postcss
      ]

    dist:
      src: "dist/css/*.css"


  grunt.loadNpmTasks('grunt-postcss')
