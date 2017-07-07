
function route(pathname,handle,req,res) {
    if(typeof handle[pathname]==="function"){
        return handle[pathname](req,res);
    }else{
        console.log('No request handler found for '+pathname);
        return "404 Not Found"
    }
}

exports.route=route;





