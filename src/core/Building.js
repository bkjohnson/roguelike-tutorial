class Building {

  static get minWidth() {
    return 5
  }

  static get maxWidth() {
    return 10
  }

  constructor(x, y) {
    this.width = Utils.randomNum(Building.minWidth, Building.maxWidth)
    this.height = Utils.randomNum(Building.minWidth, Building.maxWidth)

    this.tiles = []
    for (let x = 0; x < this.width; x++) {
      let row = []
      for (let y = 0; y < this.height; y++) {
        if ((x === 0 || x === this.width - 1) || (y === 0 || y === this.height - 1)) {
          row.push(TileType.Wall)
        }
        else {
          row.push(TileType.Floor)
        }
      }
      this.tiles.push(row)
    }
  }

}
