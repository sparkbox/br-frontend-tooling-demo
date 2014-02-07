module.exports = (grunt) ->
  grunt.config "concat",
  js:
    src: ["js/libs/*", "js/app.js"]
    #put it in dist/
    dest: "dist/js/br-demo.js"

  grunt.loadNpmTasks "grunt-contrib-concat"
