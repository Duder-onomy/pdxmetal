'use strict';

var path = require('path');

module.exports = function(config) {
    config.gha = {
        'apiEndpoint': '/api/grasshopper',
        'buildDirectory': path.join(__dirname, '..', '..', 'app/client/admin'),
        'base': '/admin/'
    };
};
