	var express = require('express');
	var morgan    = require('morgan');
	var http      = require('http');
	var https = require('https');
	var fs = require('fs');
	var app = express();


	app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/views'));


	app.get('/*', function (req, res) {
		if (req.secure) {
			console.log('Secure Server listening on port ' + 443);
			res.sendFile( __dirname + "/views/" + "index.html" );
		}
		else {
			console.log('IN Secure Server listening on port ' + 443);
			res.sendFile( __dirname + "/views/" + "index.html" );
		}

		})


		app.listen(app.get('port'), function() {
		  console.log('Node app is running on port', app.get('port'));
		});
