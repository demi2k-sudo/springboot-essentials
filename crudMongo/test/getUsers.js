const http = require('http');

const getAllUsers = () => {
    const options = {
        hostname: 'localhost',
        port: 8080,
        path: '/api/users',
        method: 'GET'
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

// Uncomment the following line to test the getAllUsers function
getAllUsers();
