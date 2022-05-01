import { Round, getRandomArbitrary, score, total } from './round.js'

let screen = [[document.body.clientHeight, document.body.clientWidth], [[0, document.body.clientHeight], [0, document.body.clientWidth]], [[15, 85], [10, 90]]]
let gap = [1250, 1750]
let firstOne = 1000
let disappear

export function start(level, position) {
    if (level == "medium") {
        gap = [850, 1250]
    } else if (level == "hard") {
        gap = [550, 850]
    } else if (level == "impossible") {
        gap = [350, 550]
    } else if (level == "glhf") {
        gap = [250, 350]
    }
    disappear = gap[1] + gap[1]/4
    if (position == "left") {
        screen = [[document.body.clientHeight, document.body.clientWidth], [[0, document.body.clientHeight], [0, document.body.clientWidth/2]], [[15, 85], [10, 45]]]
    } else if (position == "right") {
        screen = [[document.body.clientHeight, document.body.clientWidth], [[0, document.body.clientHeight], [document.body.clientWidth/2, document.body.clientWidth]], [[15, 85], [55, 90]]]
    } else if (position == "topleft") {
        screen = [[document.body.clientHeight, document.body.clientWidth], [[0, document.body.clientHeight/2], [0, document.body.clientWidth/2]], [[10, 45], [10, 45]]]
    } else if (position == "topright") {
        screen = [[document.body.clientHeight, document.body.clientWidth], [[0, document.body.clientHeight/2], [document.body.clientWidth/2, document.body.clientWidth]], [[10, 45], [55, 90]]]
    } else if (position == "bottomleft") {
        screen = [[document.body.clientHeight, document.body.clientWidth], [[document.body.clientHeight, document.body.clientHeight/2], [0, document.body.clientWidth/2]], [[55, 90], [10, 45]]]
    } else if (position == "bottomright") {
        screen = [[document.body.clientHeight, document.body.clientWidth], [[document.body.clientHeight, document.body.clientHeight/2], [0, document.body.clientWidth]], [[55, 90], [55, 90]]]
    }

    requestAnimationFrame(game)

}

function game(timestamp) {
    if (timestamp < 300000) {
        window.requestAnimationFrame(game)
    } else {
        setTimeout(end, disappear)
    }
    if (timestamp > firstOne) {
        createRound()
        firstOne += getRandomArbitrary(gap[0]-200, gap[1])
    }
}

function createRound() {
    const round = new Round(screen, disappear)
    round.add
    setTimeout(function() {
        round.remove
    }, disappear)
}

function end() {
    console.log(score, total)
}