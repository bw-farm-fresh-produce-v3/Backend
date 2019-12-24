function withCatch(promise=new Promise(res => res(true))) {
    return promise
        .then(data => [null, data])
        .catch(err => [err])
}

module.exports = withCatch