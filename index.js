const postRequestBody = {
    name: 'Steve',
    email: 'steve@steve.com'
}


const postRequest = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        accept: 'application/json'
    },
    body: JSON.stringify(postRequestBody),

  
    
}


function submitData () {

fetch('http://localhost:3000/users', postRequest)
    .then(res => res.json())
    .then(data => data(data))
    .catch((error) => {
        alert('Unauthorized Access')
        return error
    })
}

function data(newId) {
    const body = document.getElementsByTagName('body')
    const p = document.createElement('p')

    p.textContent = newId.id
    body.appendChild(p)
}