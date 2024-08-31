const http = require('http');

const updateUser = (id) => {
    const postData = JSON.stringify({
        name: 'Jane Doe',
        email: 'jane.doe@example.com'
    });

    const options = {
        hostname: 'localhost',
        port: 8080,
        path: `/api/users/${id}`,
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(postData)
        }
    };

    const req = http.request(options, (res) => {
        let data = '';

        res.on('data', (chunk) => {
            data += chunk;
        });

        res.on('end', () => {
            console.log('Response:', data);
        });
    });

    req.on('error', (e) => {
        console.error(`Problem with request: ${e.message}`);
    });

    req.write(postData);
    req.end();
};

// Replace 'USER_ID' with a real ID from your MongoDB
// Uncomment the following line to test the updateUser function
updateUser('66d04922be72f949451f35c3');
