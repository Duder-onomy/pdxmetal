/*globals module:true */
module.exports = function (grunt) {
    'use strict';

    grunt.config('jade', {
        build: {
            options: {},
            files: [{
                cwd : 'build/client/listings',
                src : '**/*.jade',
                dest : 'build/client/listings',
                expand : true,
                ext : '.html'
            }]
        }
    });
};
