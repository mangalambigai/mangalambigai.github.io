
module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            width: 300,
            suffix: "",
            quality: 60
          }, {
            width: 1024,
            suffix: "_x2",
            quality: 60
          }]
        },
        files: [{
          expand: true,
          src: ['img/**.png'],
          dest: 'tmp/'
        }]
      }
    },
    serve: {
      options: {
        port: 9000
      }
    }
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-serve');
  grunt.registerTask('default', [ 'responsive_images' ]);
};
