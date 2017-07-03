class Chunk {
  constructor() {
    this.width = 30
    this.height = 30
    this.buildings = []

    this.tiles = new Array(this.width)
    for (let i = 0; i < this.height; i++) {
      this.tiles[i] = new Array(this.height)
      this.tiles[i].fill(TileType.Ground)
    }
  }

  createBuilding() {
    let x = Utils.randomNum(10, 20)
    let y = Utils.randomNum(10, 20)

    let b = new Building(x, y)
    this.buildings.push(b)

    let tempY = y
    for (let i = 0; i < b.tiles.length; i++) {
      for (let j = 0; j < b.tiles[i].length; j++) {
        this.tiles[x].fill(b.tiles[i][j], tempY, tempY + 1)
        tempY++
      }
      tempY = y
      x++
    }
  }
}
