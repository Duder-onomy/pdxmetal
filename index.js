'use strict';

var express = require('express'),
    app = express();

app.engine('jade', require('jade').__express);
app.set('view engine', 'jade');
app.set('views', './views');
app.set('view options', {layout: true});
app.use(express.static('./public'));

app.get('*', function(req, res) {
    res.render('landing');
});

app.listen(process.env.PORT || 3000);
console.log('app is listening');
