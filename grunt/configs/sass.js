/*globals module:true */
module.exports = function (grunt) {
    'use strict';

    grunt.config('sass', {
        build : {
            files : {
                'build/client/listings/styles/main.css' : 'build/client/listings/styles/main.scss'
            }
        }
    });
};
