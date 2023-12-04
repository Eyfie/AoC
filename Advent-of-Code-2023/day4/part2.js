const fs = require('fs')
let input = fs.readFileSync('input.txt').toString();
let lines = input.split('\n');

const startTime = performance.now();


function part2 () {

    let total = 0;
    let instances = {};
    for(let line of lines) {
        const [cardId, data] = line.split(': ');
        const [winningStr, pickedStr] = data.split(' | ');
        const winningNumbers = winningStr.match(/\d+/g);
        const pickedNumbers = pickedStr.match(/\d+/g);

        let count = 0;
        for (winningNum of winningNumbers) {
            if(pickedNumbers.includes(winningNum)) {
                count++
            } 
        }
        
        instances[cardId.replace('Card ', '').trim()] = count;
    }

    function cardCopy (input) {
        total++
        const instancesCount = instances[input];

        if(instancesCount !== 0) {
            for(let i = +input + 1; i <= +input + instancesCount; i++ ) {
                cardCopy(i);
            }
        }
    }

    for(let key of Object.keys(instances)) {
        cardCopy(key);
    }
    
    return total;
}


console.log(part2())


const endTime = performance.now()
console.log(`Time taken : ${parseFloat(endTime - startTime, 2).toFixed(2)}ms`)