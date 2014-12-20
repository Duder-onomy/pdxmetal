'use strict';

var app = require('ral')('app'),
    api = require('./api'),
    admin = require('./admin'),
    listings = require('./listings'),
    error = require('./error'),
    home = require('./home');

module.exports = {
    initialize: initialize
};

function initialize() {
    var expressApp = app.expressApp;

    expressApp.use(admin());
    expressApp.use(api());
    expressApp.use(listings());
    expressApp.use(home());

    // Error routes as a fallback.
    expressApp.use(error());
}
