const https = require('https');
const fs = require('fs');

const fileStream = fs.createWriteStream('./public/output.txt');

https.get('https://en.wikipedia.org/wiki/Tunde_Onakoya', (response) => {
    console.log('statusCode:', response.statusCode);
    console.log('headers:', response.headers);

    response.on('data', (data) => {
        fileStream.write(data);
    });

    response.on('end', () => {
        console.log('Data written to output.txt');
        fileStream.end();
    });
}).on('error', (error) => {
    console.error(error);
});


https.get('https://en.wikipedia.org/wiki/Tunde_Onakoya', (response) => {
    console.log('statusCode:', response.statusCode);
    console.log('headers:', response.headers);

    response.on('data', (data) => {
        process.stdout.write(data);
    });

    response.on('end', () => {
        console.log('Data transfer complete.');
    });

    response.on('close', () => {
        console.log('Connection closed.');
    });
}).on('error', (error) => {
    console.error(error);
});
