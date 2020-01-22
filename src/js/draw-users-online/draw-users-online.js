export const drawUsersOnline = users => {
    clearUsers();
    
    users.forEach(user => {
        const body = document.getElementById('bodyUsers');

        const bodyUsersBox = document.createElement('div');

        bodyUsersBox.classList.add('users-online');
        const icon = document.createElement('div');

        icon.classList.add('users-online__icon');
        const text = document.createElement('div');

        text.classList.add('users-online__text');
        const nameUsers = document.createElement('div');

        nameUsers.classList.add('name-users');
        const ipUsers = document.createElement('div');

        ipUsers.classList.add('ip-users');
        ipUsers.innerText = user.ip;
        nameUsers.innerText = user.name;
        icon.innerText = user.name[0];

        text.append(nameUsers);
        text.append(ipUsers);

        bodyUsersBox.append(icon);
        bodyUsersBox.append(text);

        body.append(bodyUsersBox);
    });
};

const clearUsers = () => {
    let temp = document.querySelectorAll('[class="users-online"]');
        
    for(let i = 0; i < temp.length; i++) {
        temp[i].remove();
    }
};