module.exports = (grunt) ->
  grunt.config "concat",
  js:
    src: ["bower_components/js-md5/js/md5.min.js", "js/libs/*", "js/app.js"]
    #put it in dist/
    dest: "dist/js/br-demo.js"

  grunt.loadNpmTasks "grunt-contrib-concat"
