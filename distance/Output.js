class Output {
  static write(rl, distances) {
    for (let i=0; i < distances.length; i++) {
      rl.output.write(distances[i].join(' ') + '\n')
    }
  }
}

module.exports = Output
