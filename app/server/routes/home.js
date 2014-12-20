'use strict';

var express = require('express');

module.exports = function() {
    var homeRouter = express.Router();

    homeRouter
        .route('*')
        .get(function(req, res) {
            res.render('calendar');
        });

    return homeRouter;
};
