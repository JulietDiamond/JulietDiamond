var http = require("http");
var url = require("url");
var ansCheck = require("./result.js");
var index = require("./index.js");
var count = 0;
var score = 0;

http
  .createServer(function (req, res) {
    var q = url.parse(req.url, true);
    console.log(score + "score");
    if (q.pathname == "/result.js") {
      if (ansCheck.check(count, q.query)) {
        score++;
      }
      count++;
    }
    return index.main(req, res, count, score);
  })
  .listen(8087);