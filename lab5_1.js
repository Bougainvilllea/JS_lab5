let promise = new Promise(function(resolve, reject) {
    resolve(1); // resolve был, следующие вызовы не меняют состояние объекта
    setTimeout(() => resolve(2), 1000);
});
promise.then(console.log);