var express = require('express');
var proxy = require('http-proxy-middleware');
var path    = require("path");

// proxy middleware options
var options = {
    target: 'https://porcellus-srv.herokuapp.com', // target host
    changeOrigin: true,               // needed for virtual hosted sites
    ws: true,                         // proxy websockets
    pathRewrite: {
        '^/api/old-path' : '/api/new-path',     // rewrite path
        '^/api/remove/path' : '/path'           // remove base path
    },
    router: {
        // when request.headers.host == 'dev.localhost:3000',
        // override target 'http://www.example.org' to 'http://localhost:8000'
        'dev.localhost:3000' : 'http://localhost:8000'
    }
};

// create the proxy (without context)
var serviceProxy = proxy(options);

// mount `exampleProxy` in web server
var app = express();

app.use(express.static(__dirname + '/dist'));

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
    //__dirname : It will resolve to your project folder.
});

app.use('/api', serviceProxy);
app.listen(process.env.PORT || 3000);


