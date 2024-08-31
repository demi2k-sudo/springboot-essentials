const http = require('http');

const createUser = () => {
    const postData = JSON.stringify({
        name: 'John Doe',
        email: 'john.doe@example.com'
    });

    const options = {
        hostname: 'localhost',
        port: 8080,
        path: '/api/users',
        method: 'POST',
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

// Uncomment the following line to test the createUser function
createUser();
