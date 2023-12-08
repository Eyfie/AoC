const fs = require('fs');
const input = fs.readFileSync('input.txt').toString();
const lines = input.split(/[\n\r]+/);
let hands = lines.map(line => line.split(' '));


console.log(part1())


function getHandScore(hand) {
  let counts = hand.split('').map(card => getCardOccurance(hand, card));

  if(counts.includes(5)) return 6;
  if(counts.includes(4)) return 5;
  if(counts.includes(3) && counts.includes(2)) return 4;
  if(counts.includes(3)) return 3;
  if(counts.includes(2) && counts.filter(el => el === 2).length === 4) return 2;
  if(counts.includes(2)) return 1;

  return 0;
}

function getCardOccurance(hand, card) {
  let occurances = 0;
  for (let item of hand) {
    if(item === card) occurances++;
  }
  return occurances;
}

function part1() {

  let total = 0;
  const headsMap = {
    'A': 'E',
    'K': 'D',
    'Q': 'C',
    'J': 'B',
    'T': 'A'
  }

  hands.sort((a, b) =>{
    let scoreA = getHandScore(a[0]);
    let scoreB = getHandScore(b[0]);

    if(scoreA !== scoreB) {
      return scoreA - scoreB
    };

    const headMapA = a[0].split('').map(card => headsMap[card] || card).join('');
    const headMapB = b[0].split('').map(card => headsMap[card] || card).join('');

    return headMapA.localeCompare(headMapB);
  })
  
  for (let i = 0; i < hands.length; i++) {
    total += +hands[i][1] * (i + 1);
  }

  return total;
}