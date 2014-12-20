'use strict';

var express = require('express');

module.exports = function() {
    var listingsRouter = express.Router();

    listingsRouter
        .route('/listings*?')
        .get(function(req, res) {
            res.render('listings');
        });

    return listingsRouter;
};
