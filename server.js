var express	= require('express');
var app 		= express();

app.use('/', 		express.static(__dirname + '/web'));
app.use('/login', 	express.static(__dirname + '/web/pages/login'))

/** hold all static assets */
app.use('/assets', 	express.static(__dirname + '/build'));

var server 	= app.listen(3000);
