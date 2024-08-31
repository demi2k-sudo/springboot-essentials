const http = require('http');

const deleteUser = (id) => {
    const options = {
        hostname: 'localhost',
        port: 8080,
        path: `/api/users/${id}`,
        method: 'DELETE'
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

    req.end();
};

// Replace 'USER_ID' with a real ID from your MongoDB
// Uncomment the following line to test the deleteUser function
deleteUser('66d03508ab1b496c179fabda');
