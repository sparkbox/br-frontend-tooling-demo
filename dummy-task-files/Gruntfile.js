module.exports = function(grunt) {
	var port = grunt.option('port') || process.env.PORT || 8000;

  grunt.initConfig({
		uglify: {
			options: {
				banner: '<%= meta.banner %>\n'
			},
			build: {
				src: 'js/app.js',
				dest: 'dist/js/app.min.js'
			}
		},

		cssmin: {
			compress: {
				files: {
					'css/theme.min.css': [ 'dist/css/theme.css' ]
				}
			}
		},

		connect: {
			server: {
				options: {
					port: port,
					base: base,
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

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks( 'grunt-contrib-cssmin' );
	grunt.loadNpmTasks( 'grunt-contrib-uglify' );
	grunt.loadNpmTasks( 'grunt-contrib-watch' );
	grunt.loadNpmTasks( 'grunt-sass' );
	grunt.loadNpmTasks( 'grunt-contrib-connect' );
	grunt.loadNpmTasks( 'grunt-autoprefixer' );
  grunt.loadNpmTasks( 'grunt-contrib-concat' );

	// JS task
	grunt.registerTask( 'js', [ 'uglify' ] );

	// All CSS
	grunt.registerTask( 'css', [ 'cssmin' ] );

	// Serve presentation locally
  grunt.registerTask( 'serve', [ 'connect:server', 'watch' ] );

	// Default task
	grunt.registerTask( 'default', [ 'js', 'css', 'serve' ] );

};
