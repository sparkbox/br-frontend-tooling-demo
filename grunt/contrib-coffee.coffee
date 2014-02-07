module.exports = (grunt) ->
  grunt.config "coffee",
    compile:
      files:
        "js/app.js": ["coffee/init.coffee", "coffee/toollist.coffee", "coffee/app.coffee"]
    jasmine_specs:
      files: grunt.file.expandMapping(["specs/*.coffee"], "specs/js/", {
        rename: (destBase, destPath) ->
          destBase + destPath.replace(/\.coffee$/, ".js").replace(/specs\//, "")
      })

  grunt.loadNpmTasks 'grunt-contrib-coffee'
