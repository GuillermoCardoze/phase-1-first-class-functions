function receivesAFunction(callback){
    callback();
}

function returnsANamedFunction(){
    return function unname(){
        console.log('before all');
    }
}

function returnsAnAnonymousFunction(){
    return function(){
        console.log('before all');
    }
}