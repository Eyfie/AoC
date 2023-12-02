const fs = require('fs');
const startTime = performance.now();


fs.readFile('./input.txt', 'utf8', (err, data) => {
    if(err) return console.error(err);

    let sumArray = [];

    const games = data.split(/[\r\n]+/).reduce((obj, str) => {
        const strParts = str.split(':');
        obj[strParts[0]] = strParts[1].split(';');
        return obj
    }, {});

    Object.values(games).forEach((reveals) => {

        let minimalCubes = {
            red: 1,
            blue: 1,
            green: 1
        }

        const parsedReveals = reveals.map(reveal => reveal.trim().split(', '))    
        parsedReveals.forEach(reveal => {

            reveal.map(cubes => {
                const [count, color] = cubes.split(' ')
                if(minimalCubes[color] < +count) minimalCubes[color] = +count;
            })
        })

        sumArray.push(minimalCubes.red * minimalCubes.blue * minimalCubes.green)
    })
    console.log(sumArray.reduce((acc, curr) => acc + curr, 0))
})


const endTime = performance.now();
console.log(`Time taken : ${parseFloat(endTime - startTime, 2).toFixed(2)}ms`)