/*
* Simple Restify API
* Methods
    => GET
    => POST
    => PUT
    => DEL
* Author : Arivazhagan
* Version : 1.0
*/
var restify = require('restify');
var host = process.env.HOST || '127.0.0.1';
var port = process.env.PORT || '1234';
var myStuffs = require('./controller/stuffs');

var server = restify.createServer({
  name: 'My API Server'
});

server.use(function logger(req,res,next) {
  console.log(new Date(),req.method,req.url);
  next();
});

server.use(restify.bodyParser());

server.get('/api/stuffs',myStuffs.get);
server.get('/api/stuffs/:id',myStuffs.getById);
server.post('/api/stuffs',myStuffs.post);
server.put('/api/stuffs/:id',myStuffs.put);
server.del('/api/stuffs/:id',myStuffs.del);
 
server.listen(port,host, function() {
  console.log('%s listening at %s', server.name, server.url);
});