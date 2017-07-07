var querystring = require('querystring');
var fs = require('fs');
var formidable = require('formidable');
var util=require('util');


function start(req,res) {
    console.log("Request handler 'start' was called");

    var body='<html>'+
        '<head>'+
        '<meta http-equiv="Content-Type" '+
        'content="text/html; charset=UTF-8" />'+
        '</head>'+
        '<body>'+
        '<form action="/upload" enctype="multipart/form-data" method="post">'+
        '<textarea name="text" rows="20" cols="60"></textarea>'+'<br />'+
        '<input type="file" name="upload">'+'<br />'+
        '<input type="submit" value="Submit text" />'+
        '</form>'+
        '</body>'+
        '</html>';

    res.writeHead(200,{'content-type':'text/html'});
    res.write(body);
    res.end();
}

function upload(req,res) {
    console.log("Request handler 'upload' was called");
    var form = new formidable.IncomingForm();
    console.log("about to parse");
    form.parse(req,function(err,fields,files){
        console.log("parsing done");
        fs.renameSync(files.upload.path,'/tmp/test.png');
        res.writeHead(200,{"content-type":"text/html"});
        res.write("received image:<br />");
        res.write("<img src='/show' />");
        res.end();
    });

/*    res.writeHead(200,{'content-type':'text/plain'});
    res.write("the Send text is : " + querystring.parse(postData).text);
    res.end();*/
}

function show(req,res) {
    console.log("Request handler 'show' was called");

   /* res.writeHead(200,{'content-type' : 'text/html'});
    res.write(
        '<form action="/upload" enctype="multipart/form-data" '+
        'method="post">'+
        '<input type="text" name="title"><br>'+
        '<input type="file" name="upload" multiple="multiple"><br>'+
        '<input type="submit" value="Upload">'+
        '</form>'
    );
    res.end();*/

    fs.readFile('tmp/test.png','binary',function(err,file) {
        if(err){
            res.writeHead(500,{'content-type':'text/plain'});
            res.write('NOT Found \n');
            res.end();
        }else{
            res.writeHead(200,{'content-type':'image/png'});
            res.write(file,"binary");
            res.end();
        }

    })
}

exports.start = start;
exports.upload = upload;
exports.show = show;
