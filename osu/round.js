export let score = 0
export let total = 0

export class Round {    
    constructor (screen, pDissapear) {
        this.id = String(getRandomArbitrary(1, 999))
        this.width = String((screen[1][1][1] - screen[1][1][0]) * (7/100)) + "px"
        this.position = [String(getRandomArbitrary(screen[2][0][0], screen[2][0][1])) + "%", String(getRandomArbitrary(screen[2][1][0], screen[2][1][1])) + "%"] // a regler
        this.div = this.roundHtml()
        this.dissapear = pDissapear
        this.overWidth = String((screen[1][1][1] - screen[1][1][0]) * (17/100)) + "px"
        this.overDiv = this.overRoundHtml()
        this.event()
    }

    get add() {
        document.body.appendChild(this.div)
        document.body.appendChild(this.overDiv)
        total += 1
    }

    get remove() {
        this.overDiv.remove()
        this.div.remove()
    }

    roundHtml() {
        const div = document.createElement('div')
        div.classList.add("round")
        div.style.width = this.width
        div.style.top = this.position[0]
        div.style.left = this.position[1]
        div.id = "round_" + this.id + "_" + this.position[0] + "_" + this.position[1]
        return div
    }

    overRoundHtml() {
        const div = document.createElement('div')
        div.classList.add("overround")
        div.style.width = this.overWidth
        div.style.top = this.position[0]
        div.style.left = this.position[1]
        div.style.animationName = "mini"
        div.style.animationTimingFunction = "linear"
        div.style.animationDuration = String(this.dissapear) + "ms"
        div.id = "overround_" + this.id + "_" + this.position[0] + "_" + this.position[1]
        return div
    }

    event() {
        this.div.addEventListener("click", function(x) {
            score += 1
            this.remove()
            document.getElementById("over"+`${x.srcElement.id}`).remove()
        })
    }
}

export function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}