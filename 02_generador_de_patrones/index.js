let sorteo
let mitadLado = 50
let lado = 100
let x = 0
let y = 0
let ladoCanvas = 10

function setup() {
    createCanvas(windowWidth, windowHeight)
    //createCanvas(windowWidth, windowHeight)
    background(30, 32, 25)
    angleMode(DEGREES)
    frameRate(6)
    // frameRate (1) = cmabia la rapidez de como se genera
}

function draw() {

    //numero random del 0 al 1
    sorteo = random(0, 6)
    //cara (sorteo menor a 50)
    console.log(sorteo)

    // si creamos 4 patrones sera 4


    if (sorteo < 1) {
        //blanco imprime blanco

        noStroke()

        // primer trama - rectangulo
    
        fill(115, 137, 174)
        rect(x, y, lado)
    
        // arco negro (hecho con circulos) abajo
        fill(30, 32, 25)
        arc(x+lado, y+lado, lado + lado/2, lado + lado/2, 180, -90)
    
        // circulo de adentro abajo
        fill(115, 137, 174)
        arc(x+lado, y+lado, lado, lado, 180, -90)
    
        // arco arriba
        fill(30, 32, 25)
        arc(x, y, lado, lado, 0, 90)
    
        // arco de adentro arriba
        fill(115, 137, 174)
        arc(x, y, lado /2, lado /2, 0, 90)


    } else if (sorteo < 2) {

    // segunda trama

    fill(30, 32, 25)
    rect(x, y, lado)
   
    // elipse arriba izq
    fill(207, 238, 158)
    ellipse(x+ (lado/3.8), y + lado / 4, lado / 2)
   
     // elipse arriba derecha
    ellipse(x+(lado/1.35), y + lado / 4, lado / 2)
   
    // elipse abajo derecha
     ellipse(x+ (lado/3.8), y + lado/1.4, lado / 2)
   
    // elipse abajo izq
    ellipse(x+ (lado/1.35), y+ lado / 4 + lado / 2.1, lado / 2)
    
} else if (sorteo < 3) {

    // trama de lineas

    noStroke()

    fill(207, 238, 158)
    rect(x, y, lado, lado)

    // primer banda azul
    fill (65, 103, 136)
    rect(x, y + (lado/4), lado, lado /4)
    
    // segunda banda azul
    rect(x, y + (lado/1.6), lado, lado/4)

} else if (sorteo < 4) {

    noStroke()

    fill(65, 103, 136)
    rect(x, y, lado, lado)

    fill(30, 32, 25)
    ellipse(x + mitadLado, y + mitadLado, mitadLado)

} else if (sorteo < 5) {

    noStroke()

    // 5ta trama - curvas invertidas

    fill(30, 32, 25)
    rect(x, y, lado)

    // arco negro (hecho con circulos) abajo
    fill(115, 137, 174)
    arc(x+lado, y+lado, lado + lado/2, lado + lado/2, 180, -90)

    // circulo de adentro abajo
    fill(30, 32, 25)
    arc(x+lado, y+lado, lado, lado, 180, -90)

    // arco arriba
    fill(115, 137, 174)
    arc(x, y, lado, lado, 0, 90)

    // arco de adentro arriba
    fill(30, 32, 25)
    arc(x, y, lado /2, lado /2, 0, 90)

} else if (sorteo < 6) {

        // 6ta trama - Texto dividido
        
        fill(65, 103, 136)
        rect(x, y, lado)
    
        // texto "%" tamaño y color
        fill(207, 238, 158)
        textSize(50)
        textStyle(BOLD)
        text('%', x + (mitadLado), y + (mitadLado), x + lado, y + lado)
}


    y = y + lado

    if (y >= width) {
        x = x + lado
        y = 0
    }

    if (x >= windowWidth) {
        clear()
        background(30, 32, 25)
        x = 0
        y = 0
    }

}

