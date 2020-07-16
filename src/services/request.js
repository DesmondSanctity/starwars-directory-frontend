import axios from 'axios';
// import formUrlEncoded from 'form-urlencoded';

const request = {}

let CancelToken = axios.CancelToken;
let cancel;

// General request handler
request.make = (options) => {
    let _options = options || {};
    const defer = new Promise(function (resolve, reject) {
        axios({
            // request object
            cancelToken: new CancelToken(function executor(c) {
                cancel = c;
            }),
            url: _options.url,
            method: _options.method,
            baseURL: _options.baseURL
        }).then((response) => {
                    resolve(response);
            }).catch((error) => {
                reject(error.response);
            })
    });

    return defer;
}

request.get = (options) => {
    options.method = 'GET';
    return request.make(options);
}

request.cancel = () => {
    cancel && cancel();
}

export default request;
