module.exports = function(grunt) {
	"use strict";
	// Initialize the config
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		// Grunt-sass
		sass: {
			options: {
				sourceMap: true
			},
			dist: {
				files: {
					'ui/gen/css/style.css': 'ui/sass/*.scss'
				}
			}
		},
		// Combined Media Queries
		cmq: {
			options: {
				log: false
			},
			your_target: {
				files: {
					'ui/gen/css/combined': ['ui/gen/css/style.css']
				}
			}
		},
		// Minify css
		cssmin: {
			target: {
				files: {
					'ui/gen/css/style.min.css': ['ui/gen/css/combined/*.css']
				}
			}
		},
		// Grunt-contrib-watch
		watch: {
			sass: {
			// Watches all Sass or Scss files recursive within the sass folder
			files: ['ui/sass/**/*.scss'],
			// runs the task `sass` and cssmin whenever any watched file changes
			tasks: ['sass', 'cmq', 'cssmin:target']
			}
		},
	});
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-combine-media-queries');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.registerTask('default', ['sass', 'watch', 'cmq', 'cssmin']);
};
