	var express = require('express');
	var morgan    = require('morgan');
	var http      = require('http');
	var https = require('https');
	var fs = require('fs');
	var app = express();

	//app.use(morgan('dev'));

	//app.use(express.static(config.dist.root));

	//HTTP
	var options = {
		key: fs.readFileSync('./cert/key.pem'),
		cert: fs.readFileSync('./cert/cert.pem')
	};


	var secureServer = https.createServer(options, app);

	secureServer.listen(443, function() {
		console.log('Secure Server listening on port ' + 443);
	});

	var insecureServer = http.createServer(app);
	insecureServer.listen(80, function() {
		console.log('Insecure Server listening on port ' + 80);
	});



	app.get('/*', function (req, res) {
		if (req.secure) {
			res.sendFile( __dirname + "/views/" + "secure.html" );
		}
		else {
			res.sendFile( __dirname + "/views/" + "unsecure.html" );
		}

		})

	/*var server = app.listen(8080, function () {
	   var host = server.address().address
	   var port = server.address().port

	   console.log("Example app listening at http://%s:%s", host, port)
	})*/
