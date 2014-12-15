/*jshint node:true */
'use strict';
var _ = require('lodash'),
    environmentQuestion = {
        config : 'environment',
        type : 'list', // list, checkbox, confirm, input, password
        message : 'Which environment would you like to use?',
        default : 'staging', // default value if nothing is entered
        choices : ['local']
    };

module.exports = function(grunt) {

    grunt.config.set('prompt', {
        dataLoad : {
            options : {
                questions : [
                    getEnvironmentQuestion(['local', 'staging'], 'local')
                ]
            }
        },
        dataSave : {
            options : {
                questions : [
                    getEnvironmentQuestion(['local', 'staging', 'production'], 'local')
                ]
            }
        }
    });
};

function getEnvironmentQuestion(envs, defaultIs) {
    var question = _.clone(environmentQuestion);
    question.choices = envs || question.choices;
    question.default = defaultIs || question.default;
    return question;
}
