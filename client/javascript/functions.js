// Fetch data from an API using .then
fetch('http://localhost:9000/api/socks/1/3')
    .then(response => response.json())
    .then(data => {
        console.log('Data received:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });

// Fetch data from an API using async/await
async function fetchData() {
    try {
        const response = await fetch('http://localhost:9000/api/socks/1/3');
        const data = await response.json();
        console.log('Data received:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}
fetchData();