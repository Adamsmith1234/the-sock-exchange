
function postData() {
    // PUT request
    fetch('http://localhost:9000/api/register', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({'name': 'Adam', 'email': 'adajsmith@umass.edu'}),
    })
    .then(response => response.json())
    .then(data => console.log('PUT:', data))
    .catch((error) => console.error('Error:', error));

}