import { initStyle } from './initStyle.js'
import { Snake } from './snake.js'
import { Apple } from './apple.js'

let screen = [[document.body.clientHeight, document.body.clientWidth], [1, document.body.clientHeight], [1, document.body.clientWidth]]
const snakeSpeed = 1000
let time = 0
const snake = new Snake()
const apple = new Apple()

export function start(position) {
    if (position == "left") {
        let temp = screenable(100, 50)
        screen = [[document.body.clientHeight, document.body.clientWidth], [temp[0], temp[1]], [temp[2], temp[3]]]
    } else if (position == "right") {
        let temp = screenable(100, 50)
        screen = [[document.body.clientHeight, document.body.clientWidth], [temp[0], temp[1]], [temp[2] + document.body.clientWidth/2, temp[3] + document.body.clientWidth/2]]
    } else if (position == "topleft") {
        let temp = screenable(50, 50)
        screen = [[document.body.clientHeight, document.body.clientWidth], [temp[0], temp[1]], [temp[2], temp[3]]]
    } else if (position == "topright") {
        let temp = screenable(50, 50)
        screen = [[document.body.clientHeight, document.body.clientWidth], [temp[0], temp[1]], [temp[2] + document.body.clientWidth/2, temp[3] + document.body.clientWidth/2]]
    } else if (position == "bottomleft") {
        let temp = screenable(50, 50)
        screen = [[document.body.clientHeight, document.body.clientWidth], [temp[0] + document.body.clientHeight/2, temp[1] + document.body.clientHeight/2], [temp[2], temp[3]]]
    } else if (position == "bottomright") {
        let temp = screenable(50, 50)
        screen = [[document.body.clientHeight, document.body.clientWidth], [temp[0] + document.body.clientHeight/2, temp[1] + document.body.clientHeight/2], [temp[2] + document.body.clientWidth/2, temp[3] + document.body.clientWidth/2]]
    } else {
        let temp = screenable(100, 100)
        screen = [[document.body.clientHeight, document.body.clientWidth], [temp[0], temp[1]], [temp[2], temp[3]]]
    }

    initStyle(screen)

    snake.draw()
    apple.draw()

    window.requestAnimationFrame(game)
}

function screenable(pHauteur, pLargeur) {
    let h = screen[0][0] * (pHauteur/100)
    let l = screen[0][1] * (pLargeur/100)
    if (h > l) {
        return [(h - l) / 2, l + (h - l) / 2, 1, l]
    } else if (h < l) {
        return [1, h, (l - h) / 2, h + (l - h) / 2]
    } else {
        return [1, h, 1, l]
    }
}

function game(timestamp) {
    let idk = snake.snake.slice(1).find(elem => elem.x == snake.snake[0].x && elem.y == snake.snake[0].y)
    if (snake.snake.length != 625 && idk == undefined) {
        window.requestAnimationFrame(game)
    } else {
        end(snake.snake.length)
    }
    if (time < timestamp) {
        snake.update()
        if (apple.position.x == snake.snake[0].x && apple.position.y == snake.snake[0].y) {
            snake.grow()
            apple.gotEaten(snake.snake)
            snakeSpeed = Math.floor(1000 - (1.3*snake.snake.length))
        }
        snake.draw()
        apple.draw()
        time += snakeSpeed
    }
}

document.addEventListener("keydown", e => {
    snake.changeMove(e.key)
})


function end(score) {
    console.log("GG" + score)
}