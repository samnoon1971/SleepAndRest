
const fetch = require('node-fetch');

let textGoogle = 'https://google.com';
fetch(textGoogle)
    .then(res => res.text()).then(text => console.log(text)).catch(error => console.log(error));


let jsonUrl = 'https://jsonplaceholder.typicode.com/users';
fetch(jsonUrl).then(res => res.json()).then(json => {
    console.log('First user: ');
    console.log(json[0]);
    console.log('Name of the first user:');
    console.log(json[0].name);
}).catch(error => console.log(error));

let sendPackage = {
    userId: 2021,
    title: 'Pahela Baishakh',
    completed: false
}
let jsonUrl2 = 'https://jsonplaceholder.typicode.com/todos';
fetch(jsonUrl2, {
    method: 'POST',
    body: JSON.stringify(sendPackage),
    headers: {'Content-Type': 'application/json'}
}).then(res => res.json()).then(json => console.log(json)).catch(error => console.log(error));