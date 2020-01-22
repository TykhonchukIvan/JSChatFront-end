export const createDiv = array => {
    let arr = [];

    array.forEach(object => {
        const div = document.createElement('div');
        object.id && (div.id = object.id);
        object.class && (div.classList.add(object.class));

        arr.push(div);
    });

    return arr;
};

export const creatureText = array => {
    let arr = [];

    array.forEach(object => {
        const textarea =  document.createElement('textarea');
        object.id && (textarea.id = object.id);
        object.maxlength && (textarea.maxlength = object.maxlength);
        object.placeholder && (textarea.placeholder = object.placeholder);
        object.class && (textarea.classList.add(object.class));
        object.required && (textarea.required = 'required');

        arr.push(textarea);
    });

    return arr;
};

export const creatureInput = array =>{
    let arr = [];
    
    array.forEach(object => {
        const contentInput = document.createElement('input');
        object.id && (contentInput.id = object.id);
        object.class && (contentInput.classList.add(object.class));

        arr.push(contentInput);
    });

    return arr;
};
