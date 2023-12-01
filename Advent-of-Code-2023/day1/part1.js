const fs = require('fs');
const startTime = performance.now();


// PART 1 AoC2023

fs.readFile('./input.txt', 'utf8', (err, data) => {
  if (err) return console.error(err);

  const convertedData = data.split(/[\r\n]+/);

  const parsedData = convertedData.map((line) => {

    const stringArray = line.split('');
    const numberArray = stringArray.filter(e => !isNaN(e));

    return `${numberArray[0]}${numberArray[numberArray.length-1]}`
  });

  console.log(`The sum for the calibration is ${parsedData.reduce((acc, curr) => +curr + acc, 0)}`);
});



const endTime = performance.now();
console.log(`Time taken : ${parseFloat(endTime - startTime, 2).toFixed(2)}ms`)