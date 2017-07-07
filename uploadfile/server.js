var  http = require('http');
var url = require('url');



function start(route,handle) {
    http.createServer(function (req,res) {
        var pathname = url.parse(req.url).pathname;
        console.log("pathname is : " + pathname);
        route(pathname,handle,req,res);
        /*if(pathname=="/upload" && req.method.toLowerCase()=='post'){
            var form = new formidable.IncomingForm();
            form.parse(req,function (err,fields,files) {
                res.writeHead(200,{'content-type':'text/plain'});
                res.write('received upload:\n\n');
                res.end(util.inspect({fields:fields,files:files}));
            });
            return ;
        }*/

       /* var postData = "";
        req.setEncoding('utf8');
        req.addListener("data",function (postDatachunk) {
            postData += postDatachunk;
            console.log("Recevied Post Data chunk '" + postDatachunk + "'.");
        });
        req.addListener("end",function () {
            route(pathname,handle,res,postData);
        });*/


    }).listen(8080);
}

exports.start = start;



