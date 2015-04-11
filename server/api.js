module.exports = function (app, request) {

    var base64 = {
        encode: function (unencoded) {
            return new Buffer(unencoded || '').toString('base64');
        },
        decode: function (encoded) {
            return new Buffer(encoded || '', 'base64').toString('utf8');
        }
    };

    app.post('/api/v1/user/signup', function (req, res) {

    });

    app.get('/api/v1/wallet', function (req, res) {
        //var data = {
        //    'userId': base64.decode(req.query.userId)
        //};
        request({
            url: 'https://api.parse.com/1/classes/Wallet?' + encodeURIComponent('where={"userId":"' + req.query.userId + '"}'),
            method: 'GET',
            headers: {
                'X-Parse-Application-Id': 'lIAPr66zUkkCH2BKgDYnQiitc2SlgJSmjEJLic8s',
                'X-Parse-REST-API-Key': '0VqPm0FGKTCluZPHtgqkVNZ0TF6vavMfIIYYSsIj'
            }
        }, function (error, response, body) {
            if (!error) {
                res.status(200).send(body);
            } else {
                res.status(502).json({error: 'Bad Getaway'});
            }
        });

    });

    app.post('/api/v1/wallet', function (req,res){
        request({
            url: 'https://api.parse.com/1/classes/Wallet',
            method: 'POST',
            headers: {
                'X-Parse-Application-Id': 'lIAPr66zUkkCH2BKgDYnQiitc2SlgJSmjEJLic8s',
                'X-Parse-REST-API-Key': '0VqPm0FGKTCluZPHtgqkVNZ0TF6vavMfIIYYSsIj',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"name": req.query.name, "amount": Number(req.query.amount), "userId": req.query.userId})
        }, function (error, response, body) {
            if (!error) {
                res.status(200).send(body);
            } else {
                res.status(502).json({error: 'Bad Getaway'});
            }
        });
    });

    app.delete('/api/v1/wallet/:objectId' , function(req,res){
        request({
            url: 'https://api.parse.com/1/classes/Wallet/' + req.params.objectId,
            method: 'DELETE',
            headers: {
                'X-Parse-Application-Id': 'lIAPr66zUkkCH2BKgDYnQiitc2SlgJSmjEJLic8s',
                'X-Parse-REST-API-Key': '0VqPm0FGKTCluZPHtgqkVNZ0TF6vavMfIIYYSsIj'
            }
        }, function (error, response, body) {
            if (!error) {
                res.status(200).send(body);
            } else {
                res.status(502).json({error: 'Bad Getaway'});
            }
        });
    });



};