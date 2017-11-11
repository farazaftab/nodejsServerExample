	var express = require('express');
	var morgan    = require('morgan');
	var http      = require('http');
	var https = require('https');
	var fs = require('fs');
	var app = express();

	//app.use(morgan('dev'));

	//app.use(express.static(config.dist.root));

	//HTTP
	/*var options = {
		key: fs.readFileSync('./cert/key.pem'),
		cert: fs.readFileSync('./cert/cert.pem')
	};
*/

	app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/views'));
	

	app.get('/*', function (req, res) {
		if (req.secure) {
			console.log('Secure Server listening on port ' + 443);
			res.sendFile( __dirname + "/views/" + "secure.html" );
		}
		else {
			console.log('IN Secure Server listening on port ' + 443);
			res.sendFile( __dirname + "/views/" + "unsecure.html" );
		}

		})


		app.listen(app.get('port'), function() {
		  console.log('Node app is running on port', app.get('port'));
		});

	/*var server = app.listen(8080, function () {
	   var host = server.address().address
	   var port = server.address().port

	   console.log("Example app listening at http://%s:%s", host, port)
	})*/
