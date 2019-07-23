var readline = require('readline')

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
})

var tests
var n,m
var pixels = []
var rows = 0
var t = 0

rl.on('line', function (line) {
  if (tests === undefined) {
    tests = parseInt(line)
  } else if(n === undefined && m === undefined) {
    var splited = line.split(' ')
    n = parseInt(splited[0])
    m = parseInt(splited[1])
  } else {
    pixels.push(line.split(''))
    rows++
    if(rows == n) {
      var distance = require('./distance/BitmapDistances')
      var output = require('./distance/Output')
      output.write(rl, distance.get(pixels))

      n=m=undefined
      pixels=[]
      rows=0
      t++
      if (t === tests) {
        process.exit(0)
      }
    }
  }
})

