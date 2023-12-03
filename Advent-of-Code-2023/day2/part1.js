const fs = require('fs');
const startTime = performance.now();

const bagLimitation = {
    red: 12,
    green: 13,
    blue: 14
}

fs.readFile('./input.txt', 'utf8', (err, data) => {
    if(err) return console.error(err);

    let possibleGames= [];

    const games = data.split(/[\r\n]+/).reduce((obj, str) => {
        const strParts = str.split(':');
        obj[strParts[0]] = strParts[1].split(';');
        return obj
    }, {});

    Object.entries(games).forEach(([gameID, reveals]) => {

        const parsedReveals = reveals.map(reveal => reveal.trim().split(', '));

        const possibleReveal = parsedReveals.every((reveals) => reveals.every((cube) => {
            const [count, color] = cube.split(' ');
            return bagLimitation[color] >= +count
        }))

        if(possibleReveal) {
            const validGame = gameID.split(' ');
            possibleGames.push(+validGame[1]);
        }
    })
    console.log(possibleGames.reduce((acc, curr) => acc + curr, 0))
})


const endTime = performance.now();
console.log(`Time taken : ${parseFloat(endTime - startTime, 2).toFixed(2)}ms`)