const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt', {
  encoding: 'utf8',
});

const writeSteam = fs.createWriteStream('./docs/blog4.txt');

// Self Example
readStream.on('data', (chuck) => {
  console.log('---- NEW CHUCK -----');
  console.log(chuck);
  writeSteam.write('\nNEW CHUCK\n');
  writeSteam.write(chuck);
});

// With pipe
readStream.pipe(writeSteam);
