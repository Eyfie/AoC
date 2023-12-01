const fs = require('fs')
const startTime = performance.now();

// PART 2 AoC2023

fs.readFile('./testcase.txt', 'utf8', (err, data) => {
  if(err) return console.error(err);

  const stringNumbers = {
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9
  }

  const convertedData = data.split(/[\r\n]+/);

  const parsedData = convertedData.map((line) => {
    const filteredForNumberArray = line.match(/\b |one|two|three|four|five|six|seven|eight|nine|\d| \b/gi) || [];
    const numericalArray = filteredForNumberArray.map(num => {
      if(isNaN(num) === true) return stringNumbers[num]
      return +num; 
    })
    return `${numericalArray[0]}${numericalArray[numericalArray.length-1]}`
  })

  console.log(parsedData)
  console.log(`The sum for the calibration is ${parsedData.reduce((acc, curr) => +curr + acc, 0)}`);
})


const endTime = performance.now()
console.log(`Time taken : ${parseFloat(endTime - startTime, 2).toFixed(2)}ms`)
