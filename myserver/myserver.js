'use strict'

const DoorService =  require('./door.js');
const doorService = new DoorService();

doorService.getData(); // чтение JSON файла с сайта Браво

const http = require('http');
const server = new http.Server();

server.on('request', (req, res) => {
    res.end(doorService.readFile('index.html'));
});

server.listen(8080);
console.log('server has started on localhost:8080...');