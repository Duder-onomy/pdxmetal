'use strict';

module.exports = function (grunt) {
    grunt.config('clean', {
        database : ['database/pdxmetal'],
        build : ['build'],
        unUsedFilesFromBuild : [
            'build/client/pdxmetal/api',
            'build/client/pdxmetal/routers',
            'build/client/pdxmetal/views',
            'build/client/pdxmetal/styles/**/*.scss',
            'build/client/pdxmetal/constants.js',
            'build/client/pdxmetal/resources.js',
            'build/client/shared',
            'build/client/utilities'
        ]
    });
};
