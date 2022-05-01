import { start as snakeStart, start } from './snake/script.js'
import { start as osuStart } from './osu/script.js'

let osu = document.getElementById("osuGame")

osu.addEventListener('change', e => {
    const div = document.getElementById("osuDiv")
    if (div.style.display == "none") {
        div.style.display = "unset"
    } else {
        div.style.display = "none"
    }
})

let snake = document.getElementById("snakeGame")

snake.addEventListener('change', e => {
    const div = document.getElementById("snakeDiv")
    if (div.style.display == "none") {
        div.style.display = "unset"
    } else {
        div.style.display = "none"
    }
})

let button = document.getElementById('submit')

button.onclick = function(x) {
    let snakeScreen = document.querySelector('input[name="snakeCheck"]:checked').value
    let osuScreen = document.querySelector('input[name="osuCheck"]:checked').value
    let osuDiff = document.querySelector('input[name="diffOsu"]:checked').value
    let abc = document.getElementById("snakeDiv").style.display != "none"
    let bcd = document.getElementById("osuDiv").style.display != "none"
    document.body.innerHTML = ''
    if (abc) {
        snakeStart(snakeScreen)
    }
    if (bcd) {
        osuStart(osuDiff, osuScreen)
    }
}


// snakeStart("left")
// osuStart("medium", "right")