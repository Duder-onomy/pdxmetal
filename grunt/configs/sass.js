/*globals module:true */
module.exports = function (grunt) {
    'use strict';

    grunt.config('sass', {
        build : {
            files : {
                'build/client/pdxmetal/styles/main.css' : 'build/client/pdxmetal/styles/main.scss'
            }
        }
    });
};
