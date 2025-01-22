async function getUsers() {
    const response = await fetch (`https://jsonplaceholder.typicode.com/users`)
    const users = await response.json()
    const data = users.map(function(user) {
        return `
        <div class =users>
        <p>User ID: ${user.id}</p>
        <p>Name: ${user.name}</p>
        <p>UserName: ${user.username}</p>
        <p>Email: ${user.email}</p>
        <p>Address: ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
        <p>Address Geo: ${user.address.geo.lat}, ${user.address.geo.lng}</p>
        <p>Phone Number: ${user.phone} </p>
        <p>Website: ${user.website}</p>
        <p>Company Detailes: ${user.company.name}, ${user.company.catchPhrase}, ${user.company.bs}</p>
        </div>`
    }).join('');
    document.querySelector(" .row .data").innerHTML= data;
}

getUsers();