var http = require('http');
var url = require('url');




const server = http.createServer(function (req, res) {
    console.log(req.method);
    console.log(req.headers);
    console.log(req.url);
    console.log(url.parse(req.url, true).req.id);
    
    
    
    

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello World');
    res.end();
  
}).listen(8000);
