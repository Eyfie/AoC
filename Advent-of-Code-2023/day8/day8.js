const fs = require('fs')
const input = fs.readFileSync('input.txt').toString()
const lines = input.split(/[\n\r]+/)


console.log(part1())


function part1(){

  const pattern = lines.shift().split('');

  const nodes = lines.reduce((obj, str) => {
    const strParts = str.split(' = ')
    const [L, R] = strParts[1].replace(/[()]/g, '').split(', ')
    obj[strParts[0]] = {L, R}
    return obj
  }, {})

  let currentNode= 'AAA';
  let total = 0;

  while(currentNode !== 'ZZZ'){
    currentNode = nodes[currentNode][pattern[total % pattern.length]];
    total++
  }

  return total;
}