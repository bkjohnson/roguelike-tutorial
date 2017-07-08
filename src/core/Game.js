class Game {
  constructor() {
    this.display = new ROT.Display()
    this.agents = []

    document.body.appendChild(this.display.getContainer())

    this.chunk = new Chunk()
    this.chunk.createBuilding()
  }

  addAgent(agent) {
    this.agents.push(agent)

    this.display.draw( agent._x, agent._y, agent._char, "#fff" )
  }

  start() {
    window.requestAnimationFrame(this.start.bind(this))
    this.updateDisplay()
  }

  updateMap() {
    let map = this.chunk.tiles
    for (let x = 0; x < map.length; x++) {
      for (let y = 0; y < map[x].length; y++) {
        let char = '.'
        switch(map[x][y]) {
          case TileType.Ground:
            char = '.'
            break
          case TileType.Wall:
            char = '#'
            break
          case TileType.Floor:
            char = '*'
        }

        this.display.draw( x, y, char)
      }
    }
  }

  updateDisplay() {
    this.updateMap()

    // Update agents
    let agent = null
    for (let i = 0; i < this.agents.length; i++) {
      agent = this.agents[i]
      this.display.draw( agent._x, agent._y, agent._char )
    }
  }
}
