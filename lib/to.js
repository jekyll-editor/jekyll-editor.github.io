
module.exports = (promise) => {
    if(!promise || !Promise.prototype.isPrototypeOf(promise)){
        return new Promise((resolve, reject)=>{
            reject(new Error("应该传入一个Promise对象"));
        }).catch((err)=>{
            return [err, null];
        });
    }
    return promise.then(function(){
        return [null, ...arguments];
    }).catch(err => {
        return [err, null];
    });
} 