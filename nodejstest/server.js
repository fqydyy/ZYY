var http=require('http');
var url=require('url');

function start(route,handle){
    http.createServer(function (req,res) {
        var pathname=url.parse(req.url).pathname;
        var postData="";
        console.log('Request for '+pathname);
        req.setEncoding('utf8');
        req.addListener("data",function (postDataChunk) {
            postData+=postDataChunk;
            console.log("Recevied Post Data chunk '" + postDataChunk + "'.");
        });
        req.addListener("end",function () {
            route(pathname,handle,res,postData)
        })

        // route(pathname,handle,res);

    }).listen(8080);
    console.log('Server has started');
}
exports.start=start;




