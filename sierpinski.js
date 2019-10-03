function Sierpinski (sides) {
    this.points = []
    this.vertices = []
    for (let i = 0; i < sides; i++) {
        let r = 100
        let x = r * Math.cos(2 * Math.PI * i / sides)
        let y = r * Math.sin(2 * Math.PI * i / sides)
        this.points.push([x, y])
        this.vertices.push([x, y])
    }
    
    this.point = this.vertices[0]
    
    this.getRandomVertex = () => {
        const r = Math.floor(Math.random() * sides)
        return this.vertices[r]
    }
    
    this.pushRandomPoint = () => {
        const rando = this.getRandomVertex()
        const newPoint = [(this.point[0] + rando[0]) / 2, (this.point[1] + rando[1]) / 2]
        this.points.push(newPoint)
        // console.log(`going from point (${point.x}, ${point.y}) to random vertex (${rando.x}, ${rando.y})`)
        // console.log(`new point is (${newPoint.x}, ${newPoint.y})`)
        this.point = newPoint
    }
}

