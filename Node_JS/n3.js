var http = require('http');
var url = require('url');
http.createServer(function(req, res){
    res.writeHead(200, {'Content-type': 'text/html'});
    var q = url.parse(req.url, true).query;
   // console.log(q);
    var text = q.year + " " + q.month;
    res.end(text);
}).listen(8082);

// var http = require('http');


// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(req.url);

//     res.end();
// }).listen(8085);