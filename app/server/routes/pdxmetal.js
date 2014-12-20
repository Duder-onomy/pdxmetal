'use strict';

var express = require('express');

module.exports = function() {
    var pdxmetalRouter = express.Router();

    pdxmetalRouter
        .route('/pdxmetal*?')
        .get(function(req, res) {
            res.render('pdxmetal');
        });

    return pdxmetalRouter;
};
