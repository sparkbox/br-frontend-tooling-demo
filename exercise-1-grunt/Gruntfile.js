module.exports = function(grunt) {
	var port = grunt.option('port') || process.env.PORT || 8000;

  grunt.initConfig({
    cssmin: {
			compress: {
				files: {
					'dist/css/theme.min.css': [ 'src/css/theme.css' ]
				}
			}
		},

		connect: {
			server: {
				options: {
					port: port,
					base: 'dist',
          hostname: '0.0.0.0',
					livereload: true,
          open: true
				}
      }
		},

		watch: {
			js: {
				files: [ 'js/**' ],
				tasks: 'js'
			},
			css: {
				files: [ 'css/**' ],
				tasks: 'css'
			},
			options: {
				livereload: true
			}
		}
  });

  grunt.loadNpmTasks( 'grunt-contrib-watch' );
	grunt.loadNpmTasks( 'grunt-contrib-cssmin' );
  grunt.loadNpmTasks( 'grunt-contrib-watch' );
	grunt.loadNpmTasks( 'grunt-contrib-connect' );

	// JS task
	grunt.registerTask( 'js', [ ] );

	// All CSS
	grunt.registerTask( 'css', [ 'cssmin' ] );

	// Serve presentation locally
  grunt.registerTask( 'serve', [ 'connect:server', 'watch' ] );

	// Default task
	grunt.registerTask( 'default', [ 'js', 'css', 'serve' ] );

};
