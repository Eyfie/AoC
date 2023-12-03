const fs = require('fs');
const startTime = performance.now()

fs.readFile('input.txt', 'utf8', (err, data) => {
    if(err) return console.error(err);

    console.log(data)
})


const endTime = performance.now()
console.log(`Time taken : ${parseFloat(endTime - startTime, 2).toFixed(2)}ms`)