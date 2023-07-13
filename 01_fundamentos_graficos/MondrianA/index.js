let x = 215

function setup() {
    createCanvas(500, 500)
    background(233, 224, 210)

    strokeWeight(5)
    line(x, 0, x, 500)
    
    x = x + 72
    line(x, 0, x, 500)
    
    x = x + 72
    line(x, 0, x, 500)
    
    x = x - 216
    line(x, 0, x, 500)
    
    line (0, x, 500, x)
    
    x = x + 72
    line (0, x, 500, x)
    
    x = x + 72
    line (0, x, 500, x)
    
    x = x + 72
    line (0, x, 500, x)

    strokeWeight(3)
    fill(196, 66, 51)
    ellipse(250, 430, 50)
    ellipse(72, 325, 50)
    
    ellipse(430, 72, 100)

    fill(244, 205, 41)
    x = x - 215
    rect(x, 288, 70, 70)
    
    fill(81, 122, 176)
    rect(288, 144, 70, 142)
    
    fill(244, 205, 41)
    triangle(150, 5, 209, 5, 150, 80)
    triangle(420, 295, 495, 295, 495, 350)

}

function draw() {
}