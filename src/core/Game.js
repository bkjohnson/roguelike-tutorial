class Game {
  constructor() {
    this.display = new ROT.Display()
    this.agents = []

    document.body.appendChild(this.display.getContainer())
    this.generateChunk()
  }

  generateChunk() {
    let chunk = new ROT.Map.Buildings()
    this.map = chunk.create(this.display.DEBUG)._map
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
    for (let x = 0; x < this.map.length; x++) {
      for (let y = 0; y < this.map[x].length; y++) {
        if (this.map[x][y] == 1) {
          this.display.draw( x, y, '=')
        }
        else {
          this.display.draw( x, y, '.')
        }
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
