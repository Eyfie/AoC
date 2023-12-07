const fs = require('fs')
const input = fs.readFileSync('input.txt').toString();
const lines = input.split(/[\n\r]+/);
const [times, distances] = lines.map(line => line.match(/\d+/g))

console.log(part1())
console.log(part2())


function part1() {

    let results = []

    for(let i = 0; i < times.length; i++) {

      if(!results[i]) results.push([])

      for(let pressedButton = 0; pressedButton < times[i]; pressedButton++) {

        if((times[i] - pressedButton) * pressedButton > distances[i]) results[i].push(pressedButton)
      }
    }
  const inputSolution = results.map(i => i.length)
  return inputSolution.reduce((a, b) => a * b)
}


function part2() {

  let results = 0;
  const time = times.join('')
  const distance = distances.join('')

  for(let pressedButton = 0; pressedButton < time; pressedButton++) {

    if((time - pressedButton) * pressedButton > distance) results++
  }

return results
}

