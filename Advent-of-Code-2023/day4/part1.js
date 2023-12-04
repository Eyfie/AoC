const fs = require('fs')
const startTime = performance.now()

fs.readFile('input.txt', 'utf8', (err, data) => {
    if(err) return console.error(err);

    let pilePoints = [];

    const cards = data.split('\n').map((card) => {
        const trimmedCard = card.split(': ').slice(-1);
        const numberSets = trimmedCard[0].split(' | ');
        const numberArrays = numberSets.map(numberStr => numberStr.split(' ').filter(number => number !== ''))
        return numberArrays
    })


    cards.forEach((cardSets) => {

        let cardPoints = 0.5;
        let winningSet = false

        const playedNumbers = cardSets[0];
        const winningNumbers = cardSets[1];

        for (let p = 0; p < playedNumbers.length; p++) {
            for(let w = 0; w < winningNumbers.length; w++){
    
                if (playedNumbers[p] === winningNumbers[w]) {
                    winningSet = true;
                    cardPoints = cardPoints*2
                }
            }
    
        }

        if(winningSet) {
            pilePoints.push(cardPoints);
            cardPoints = 0.5
            winningSet = false
        }
    })
    
    console.log(pilePoints.reduce((a,b) => a+b));
})



const endTime = performance.now()
console.log(`Time taken : ${parseFloat(endTime - startTime, 2).toFixed(2)}ms`)