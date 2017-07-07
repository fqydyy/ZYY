var exec=require('child_process').exec;
function start(res,postData) {
    console.log("Request handler 'start' was called");
    var body = '<html>'+
        '<head>'+
        '<meta http-equiv="Content-Type" content="text/html; '+
        'charset=UTF-8" />'+
        '</head>'+
        '<body>'+
        '<form action="/upload" method="post">'+
        '<textarea name="text" rows="20" cols="60"></textarea>'+
        '<input type="submit" value="Submit text" />'+
        '</form>'+
        '</body>'+
        '</html>';
    res.writeHead(200,{"Content-Type" : "text/html"})
    res.write(body);
    res.end();

    /*exec('find/',{timeout:100000,maxBuffer:20000*1024},
        function (error,stdout,stderr) {
        res.writeHead(200,{'content-Type':'text/plain'});
        res.write(stdout);
        res.end();
    });*/
    /*function sleep(milliSeconds) {
        var startTime = new Date().getTime();
        while (new Date().getTime() < startTime + milliSeconds);
    }
    sleep(10000);
    return "start"*/
    // return "start";
}
function upload(res,postData) {
    console.log("Request handler 'upload' was called");
    res.writeHead(200,{"Content-Type" : "text/plain"})
    res.write("you have sent: "+ postData);
    res.end();
    /*exec('find/',function (error,stdout,stderr) {
        res.writeHead(200,{'content-Type':'text/plain'});
        res.write("hello Upload");
        res.end();
    });*/
}
exports.start=start;
exports.upload=upload;