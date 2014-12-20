'use strict';

module.exports = function (grunt) {
    grunt.config('clean', {
        database : ['database/listings'],
        build : ['build'],
        unUsedFilesFromBuild : [
            'build/client/listings/api',
            'build/client/listings/routers',
            'build/client/listings/views',
            'build/client/listings/styles/**/*.scss',
            'build/client/listings/constants.js',
            'build/client/listings/resources.js',
            'build/client/shared',
            'build/client/utilities'
        ]
    });
};
