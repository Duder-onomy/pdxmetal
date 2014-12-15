'use strict';

var app = require('ral')('app'),
    api = require('./api'),
    admin = require('./admin'),
    pdxmetal = require('./pdxmetal'),
    error = require('./error');

module.exports = {
    initialize: initialize
};

function initialize() {
    var expressApp = app.expressApp;

    expressApp.use(admin());
    expressApp.use(api());
    expressApp.use(pdxmetal());

    // Error routes as a fallback.
    expressApp.use(error());
}
