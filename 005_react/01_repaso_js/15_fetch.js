// ! fetch no lo ejecuta node, lo hace el explorador
const url = 'https://jsonplaceholder.typicode.com/users'

fetch(url)
    .then(response => console.log(response))

// ! .text() y .json() son métodos de la respuesta que retirnan promesas
fetch(url)
    .then(response => console.log(response.text()))

fetch(url)
    .then(response => console.log(response.json()))

// ! Para ver la data
fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))

// fetch(url)
//     .then(response => response.text())
//     .then(data => console.log(data))

// ! fetch para POST
console.log('POST')
fetch(url, {
    method: 'POST', // GET, POST, PUT, DELETE, etc.
    headers: {
        'Content-type': 'application/json',
        'authorization': 'Bearer AquiVaElTokenDeAutorizacion'
    },
    body: JSON.stringify({
        name: 'User 1',
        username: 'user1'
    })  
})
    .then(response => response.json())
    .then(data => console.log(data))
