const url = 'https://jsonplaceholder.typicode.com/users'

const fetchData = async () => {

    const response = await fetch(url, {
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
     
    const data = await response.json()
    console.log(data)
}

fetchData()