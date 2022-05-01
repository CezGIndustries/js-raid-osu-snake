export class Snake {
    direction = { x: 0, y: -1 }
    lastDirection = { x: 0, y: -1 }
    snake = [{ x: 13, y: 13 }]
    beforeLastPart = { x: 13, y: 13 }

    constructor () {}

    update() {
        this.beforeLastPart = { ...this.snake[this.snake.length-1]}
        for (let i = this.snake.length - 1; i >= 1; i--) {
            this.snake[i] = { ...this.snake[i-1] }
        }
        this.snake[0].x += this.direction.x
        this.snake[0].y += this.direction.y
        this.lastDirection = this.direction
    }

    draw() {
        const snakeBox = document.getElementById('snakeBox')
        snakeBox.innerHTML = ""
        for (let i = 0; i < this.snake.length; i++) {
            const snakeDraw = document.createElement('div')
            snakeDraw.classList.add('snake')
            if (i == 0) {
                snakeDraw.classList.add('snakeHead')
            } else {
                snakeDraw.classList.add('snakePart')
            }
            if (this.snake[i].x >= 26) {
                this.snake[i] = { x: 1, y: this.snake[i].y}
            } else if (this.snake[i].x <= 0) {
                this.snake[i] = { x: 25, y: this.snake[i].y}
            } else if (this.snake[i].y >= 26) {
                this.snake[i] = { x: this.snake[i].x, y: 1}
            } else if (this.snake[i].y <= 0) {
                this.snake[i] = { x: this.snake[i].x, y: 25}
            }
            snakeDraw.style.gridRowStart = this.snake[i].y
            snakeDraw.style.gridColumnStart = this.snake[i].x
            snakeBox.appendChild(snakeDraw)
        
        }
    }

    changeMove(key) {
        switch (key) {
            case "z":
                if (this.lastDirection.y != 0) break
                this.direction = { x: 0, y: -1 }
                break
            case "q":
                if (this.lastDirection.x != 0) break
                this.direction = { x: -1, y: 0 }
                break
            case "s":
                if (this.lastDirection.y != 0) break
                this.direction = { x: 0, y: 1 }
                break
            case "d":
                if (this.lastDirection.x != 0) break
                this.direction = { x: 1, y: 0 }
                break
        }
    }

    grow() {
        this.snake.push( { x: this.beforeLastPart.x, y: this.beforeLastPart.y })
    }
}