/*globals module:true */
module.exports = function (grunt) {
    'use strict';

    grunt.config('autoprefixer', {
        no_dest: {
            src: 'build/client/listings/styles/main.css'
        }
    });
};
