const fs = require('fs');

fs.writeFile('writing.txt', 'I am writing!!!', (err) => {
    if(err) {
        throw err;
    }
    console.log('I am writing!!!');
});