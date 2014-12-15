'use strict';
module.exports = function (grunt) {

    grunt.config('shell',
        {
            admin : {
                options : {
                    stdout : true,
                    stderr : true,
                    failOnError : true,
                    execOptions: {
                        cwd: './'
                    }
                },
                command : './node_modules/.bin/grasshopper build'
            },
            mongoExport : {
                options : {
                    stdout : true,
                    stderr : true,
                    failOnError : true,
                    execOptions: {
                        cwd: './'
                    }
                },
                command : 'mongoexport --jsonArray --db <%= mongo.database %> -c <%= collection %> --host <%= mongo.host %>:27017 ' +
                '<%= mongo.username ? "--username " + mongo.username : "" %> ' +
                '<%= mongo.password ? "--password " + mongo.password : "" %> ' +
                '--out .data/<%= fixtureFolder %>/<%= collection %>.json'
            },
            mongoImport :{
                options : {
                    stdout : true,
                    stderr : true,
                    failOnError : true,
                    execOptions: {
                        cwd: './'
                    }
                },
                command : 'mongoimport --drop --jsonArray --db <%= mongo.database %> -c <%= collection %> --host <%= mongo.host %>:27017 ' +
                '<%= mongo.username ? "--username " + mongo.username : "" %> ' +
                '<%= mongo.password ? "--password " + mongo.password : "" %> ' +
                '--file .data/<%= fixtureFolder %>/<%= collection %>.json'
            }
        }
    );
};
