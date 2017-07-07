function fibonacci(n) {
    if(n===0 || n===1){
        return n;
    }
    if(n > 10){
        throw new Error('n should <= 10')
    }
    return fibonacci(n-1)+fibonacci(n-2);
}


exports.fibonacci= fibonacci;

if(require.main === module){
    var n = Number(process.argv[2]);
    console.log('fibonacci('+ n + ') is', fibonacci(n));
}