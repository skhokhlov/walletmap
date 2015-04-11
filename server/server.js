var express = require('express'),
    request = require('request'),
    app = express();

app.set('port', process.env.PORT || 3000);


require('./api.js')(app, request);


require('http').createServer(app).listen(app.get('port'), function () {
    console.log('Server listening on port ' + app.get('port'));
});