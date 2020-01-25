export const sendPostCheckUser = (data) => {

    return new Promise((resolve, reject) => {

        const xhr = new XMLHttpRequest();

        xhr.open('POST', '/checkUser', true);
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        xhr.send(JSON.stringify(data));
        xhr.onload = () => {
            const responseSer = JSON.parse(xhr.response);
            console.log(responseSer);
            resolve(responseSer);

        };
    });
};


export const sendPostCheckAdmin = (data) => {

    return new Promise((resolve, reject) => {

        const xhr = new XMLHttpRequest();

        xhr.open('POST', '/checkAdmin', true);
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        xhr.send(JSON.stringify(data));
        xhr.onload = () => {
            const responseSer = JSON.parse(xhr.response);
            console.log(responseSer);
            resolve(responseSer);

        };
    });
};

