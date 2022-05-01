export function initStyle(screen) {
    const firstGrid = document.createElement('div')
    firstGrid.id = "firstGrid"
    firstGrid.style.gridTemplateRows = "repeat(" + Math.round(screen[0][0]) + ", 1px)"
    firstGrid.style.gridTemplateColumns = "repeat(" + Math.round(screen[0][1]) + ", 1px)"

    
    const snakeBox = document.createElement('div')
    snakeBox.id = "snakeBox"
    snakeBox.style.gridColumn = Math.round(screen[2][0]) + "/" + Math.round(screen[2][1])
    snakeBox.style.gridRow = Math.round(screen[1][0]) + "/" + Math.round(screen[1][1])
    snakeBox.style.gridTemplateColumns = "repeat(25, " + (Math.round(screen[2][1]) - Math.round(screen[2][0])) / 25 + "px)"
    snakeBox.style.gridTemplateRows = "repeat(25, " + (Math.round(screen[1][1]) - Math.round(screen[1][0])) / 25 + "px)"

    firstGrid.appendChild(snakeBox)

    document.body.appendChild(firstGrid)
}