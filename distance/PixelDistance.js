class PixelDistance {
  static get(i1, j1, i2, j2) {
    return Math.abs(i1-i2)+Math.abs(j1-j2)
  }
}

module.exports = PixelDistance
