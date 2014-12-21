var http = require('http');
// var config = require('../config');
var OPTIONS = require('./options');

module.exports = function del(record, callback) {

  var options = OPTIONS(record, 'DELETE');
  var resStr = '';
  // Set up the request
  var req = http.request(options, function(res) {
    res.setEncoding('utf8');
    var resStr = '';
    res.on('data', function (chunk) {
      resStr += chunk;
    }).on('end', function () {
      callback(null, JSON.parse(resStr));
    });
  }).end();
}