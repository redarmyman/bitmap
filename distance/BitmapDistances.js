var distance = require('./PixelDistance')

class BitmapDistances {
  static get(pixels) {
    const result = []
    for (let i1=0; i1 < pixels.length; i1++) {
      for (let j1=0; j1 < pixels[0].length; j1++) {
        for(let i2=0; i2 < pixels.length; i2++) {
          for (let j2=0; j2 < pixels[0].length; j2++) {
            if(pixels[i2][j2] == 1) {
              var dist = distance.get(i1, j1, i2, j2)

              if (result[i1] === undefined) {
                result[i1] = []
              }
              if (
                result[i1][j1] === undefined || 
                dist < result[i1][j1]
              ) {
                if (result[i1] === undefined) {
                  result[i1] = []
                }
                result[i1][j1] = dist
              }
            }
          }
        }
      }
    }
    return result
  }
}

module.exports = BitmapDistances
