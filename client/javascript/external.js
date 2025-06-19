page = 1

async function getData() {
    // Use fetch to retrieve data over the network from an API endpoint
	const socks = await fetch(`http://localhost:9000/api/socks/${page + 1}/10`).then(res => res.json());
	updateHTML(socks);  // Update HTML after data is fetched
    page += 1
};

function updateHTML(socks) {
    document.getElementById('data').innerHTML = '';
	for (let i = 0; i < socks.length; i++) {
		let sock = socks[i].sockDetails;
        console.log(sock)
		let sockDiv = document.createElement('tr');
		sockDiv.innerHTML = `             
                <td>${sock.size}</td>
                <td>${sock.color}</td>
                <td>${sock.pattern}</td>
                <td>${sock.material}</td>
                <td>${sock.condition}</td>
                <td>${sock.forFoot}</td>
             `;
		document.getElementById('data').appendChild(sockDiv);
	}

    try {
        if (socks.length == 0){
            alert("No more data to fetch")
        }
    }

    catch(e) {
        console.log("No more data to fetch")
    }
}

// Call the function to fetch and update data
getData();