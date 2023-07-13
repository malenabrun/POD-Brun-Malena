let y = 100
let Xdos = 500
let Xuno = 0
let L = 490
let derecha = 320

function setup() {
    createCanvas(500, 500)
    background(236, 228, 217)

    stroke(0)
    strokeWeight(15)
    line(Xuno, y, Xdos, y)

    y = 90 + y
    line(Xuno, y, Xdos, y)

    y = 90 + y
    line(Xuno, y, Xdos, y)

    y = 100 + y
    line(Xuno, y, Xdos, y)

    noStroke()
    fill(80, 121, 175)
    rect(0, 0, 120, 95)
    rect(0, 105, 120, 80)

stroke(0)
    strokeWeight(13)
    line(120, 0, 120, 500)

    strokeWeight(8)
    line(100, 0, 100, 500)

    stroke(0)
    strokeWeight(15)
    line(L, 280, L, 380)

    noStroke()
    fill(193, 74, 58)
    rect(495, 285, 10, 90)
    
    stroke(0)
    strokeWeight(13)
line(derecha, 0, derecha, 500)

derecha = derecha+50
line(derecha, 0, derecha, 500)

derecha = derecha+50
line(derecha, 0, derecha, 500)

line(320, 470, 420, 470)

line(180, 0, 180, 500)
line(210, 0, 210, 500)

fill(243, 204, 37)
noStroke()
rect(376, 385, 38, 79)

}

function draw() {

}