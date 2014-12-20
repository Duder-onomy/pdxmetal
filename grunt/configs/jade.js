/*globals module:true */
module.exports = function (grunt) {
    'use strict';

    grunt.config('jade', {
        build: {
            options: {},
            files: [{
                cwd : 'build/client/pdxmetal',
                src : '**/*.jade',
                dest : 'build/client/pdxmetal',
                expand : true,
                ext : '.html'
            }]
        }
    });
};
