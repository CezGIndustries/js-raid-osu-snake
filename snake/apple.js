export class Apple {
    position = { x: getRandomArbitrary(1, 25), y: getRandomArbitrary(1, 25)}
    apple = document.createElement('div')
    constructor () {
        if (this.position.x == 13 && this.position.y == 13) {
            this.position = { x: getRandomArbitrary(1, 25), y: getRandomArbitrary(1, 25)}
        }
        this.apple.classList.add('apple')
    }

    draw() {
        this.apple.style.gridRowStart = this.position.y
        this.apple.style.gridColumnStart = this.position.x
        document.getElementById('snakeBox').appendChild(this.apple)
    }

    gotEaten(snake) {
        let inCase = 0
        while (inCase != undefined) {
            this.position = { x: getRandomArbitrary(1, 25), y: getRandomArbitrary(1, 25)}
            inCase = snake.find(elem => elem.x == this.position.x && elem.y == this.position.y)
        }
    }
}

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}