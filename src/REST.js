export const sendGet = (cb) => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', '/online');
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.onload = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const data = JSON.parse(xhr.response);

            cb && (cb(data));
        }
    };

    xhr.send();
};

export const sendGetUsers = cb => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', '/getUsers');
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.onload = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const data = JSON.parse(xhr.response);

            cb && (cb(data));
        }
    };

    xhr.send();
};

export const sendPost = (data, cb) => {
    const xhr = new XMLHttpRequest();

    xhr.open('POST', '/online');
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.onload = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const data = xhr.response;

            cb && (cb(data));
        }
    };

    xhr.send(JSON.stringify(data));
};

// export const  sendPostCheckUser = (data) => {
//     const xhr = new XMLHttpRequest();
//
//     xhr.open('POST', '/checkUser', false);
//     xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
//
//     xhr.send(JSON.stringify(data));
//     const check = JSON.parse(xhr.response);
//
//     return check;
// };

// export const  sendPostCheckAdmin = (data) => {
//     const xhr = new XMLHttpRequest();
//
//     xhr.open('POST', '/checkAdmin', false);
//     xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
//
//     xhr.send(JSON.stringify(data));
//     const check = JSON.parse(xhr.response);
//
//
//     return check;
//
// };