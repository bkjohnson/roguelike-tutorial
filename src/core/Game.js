class Game {
  constructor() {
    this.display = new ROT.Display()
    this.agents = []

    document.body.appendChild(this.display.getContainer())
  }

  addAgent(agent) {
    this.agents.push(agent)

    this.display.draw( agent._x, agent._y, agent._char, "#fff" )
  }

  start() {
    window.requestAnimationFrame(this.start.bind(this))
    this.updateDisplay()
  }

  updateDisplay() {
    let agent = null
    for (let i = 0; i < this.agents.length; i++) {
      agent = this.agents[i]
      this.display.draw( agent._x, agent._y, agent._char )
    }
  }
}
