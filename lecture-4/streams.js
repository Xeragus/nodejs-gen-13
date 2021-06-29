/**
 * 3 tipa na streams:
 * 1. readable
 * 2. writable
 * 3. duplex
 */

const fs = require('fs');

// const writableStream = fs.createWriteStream('./output.txt');

// writableStream.write('Ova e nasiot prv file');

const readableStream = fs.createReadStream('./output.txt');

readableStream.on('data', chunk => {
  console.log('Primivme chunk na podatoci: ', chunk.toString());
})