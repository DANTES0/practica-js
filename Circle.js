class circle {
    color = 'red';
    node = 'circle'
    constructor (node, color) {
        this.color = color
        this.node = node
        this.createCircle()
    }

    createCircle () {
        const circle = document.createElement('div')
        circle.style.height = '50px'
        circle.style.width = '50px'
        circle.style.backgroundColor = color
        circle.style.borderRadius = '50%'
        this.node.appendChild(circle)
    }
}