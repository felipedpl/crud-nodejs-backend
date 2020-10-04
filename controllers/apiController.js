exports.test = function(req, res) {
    res.send('Olá Teste controller');
};

exports.details = function(req, res) {
    res.send({type: 'GET'});
};

exports.add = function(req, res) {
    console.log('You made a POST request: ', req.body);
    res.send({
        type: 'POST',
        name: req.body.name,
        rank: req.body.rank
    });
};

exports.update = function(req, res) {
    res.send({type: 'PUT'});
};

exports.delete = function(req, res) {
    res.send({type: 'DELETE'});
};