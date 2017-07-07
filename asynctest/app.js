var async=require('async');

var urls=[];
for(let i = 0; i < 30; i++){
    urls.push('http://datasource_'+i);
}

var concurrencycount=0;cd
var fetchUrl = function(url,callback){
    var delay = parseInt(Math.random()*10000000%2000,10);
    concurrencycount++;
    console.log('现在的并发数是',concurrencycount,'. 正在抓取的是： ', url, '. 耗时'+delay+'毫秒');
    setTimeout(function () {
        concurrencycount--;
        callback(null,url + ' html content')
    },delay);
};
async.mapLimit(urls,5,function (url,callback) {
    fetchUrl(url,callback);
},function (err,result) {
    console.log('final:');
    console.log(result);
});