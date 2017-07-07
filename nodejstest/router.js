

function route(pathname,handle,res,postData){
    console.log('This is a route output test');
    if(typeof handle[pathname]==='function'){
        return handle[pathname](res,postData);
    }else{
        console.log('No request handler found for '+pathname);
        return "404 Not Found"
    }
}
exports.route=route;