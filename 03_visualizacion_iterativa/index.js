// Cancion: Aldebaran - Armen Miran

function setup() {
    createCanvas(600, 600)
    frameRate(3)
}

function draw() {
    background(0)

    tiempo = round(millis()) % 9000

// 1er Modulo "ooo's"
    if (tiempo < 1000) {
        for (let x = 50; x < width; x = x + 140) {
            //dibuja las columnas
            for (let y = 50; y < height - 50; y = y + 50) {
                fill(60, 110, 113)
                noStroke()
                text('OooOooO', x, random(50, height - 60));
            }
        }
// 2do Modulo "ooo's"
    } else if (tiempo < 2000) {
        for (let x = 50; x < width; x = x + 140) {
            //dibuja las columnas
            for (let y = 60; y < height; y = y + 50) {
                fill(112, 174, 110)
                noStroke()
                text('OooOooO', random(2, 500), y);
            }
        }
// 1er Modulo circulos azules
    } else if (tiempo < 3000) {
        fill(60, 110, 113)
        let x = 20
        for (let x = 60; x < width - 80; x = x + 20) {
            //dibuja las columnas
            for (let y = 60; y < height - 80; y = y + 20) {
                ellipse(x, y, random(5, 20));
            }
        }
// 2do Modulo circulos verdes
    } else if (tiempo < 4000) {
        let x = 30
        fill(112, 174, 110)
        for (let x = 60; x < width - 60; x = x + 30) {
            //dibuja las columnas
            for (let y = 60; y < height - 60; y = y + 30) {
                ellipse(x, y, random(5, 20));
            }
        }
// 1er Lineas Izq
    } else if (tiempo < 5000) {
        stroke(60, 110, 113)
        strokeWeight(4)
        let x = 30
        for (let y = 60; y < height - 60; y = y + 30) {
            line(300, 300, 50, random(50, 550));
        }
// 2do Lineas Dcha
    } else if (tiempo < 6070) {
        let x = 30
        stroke(60, 110, 113)
        strokeWeight(4)
        for (let y = 60; y < height - 60; y = y + 30) {
            line(300, 300, 550, random(50, 550));
        }
// 3ro Lineas abajo
    } else if (tiempo < 7140) {
        let x = 30
        stroke(60, 110, 113)
        strokeWeight(4)
        for (let y = 60; y < height - 60; y = y + 30) {
            line(300, 300, random(50, 550), 550);
        }
// 4to Lineas arriba
    } else if (tiempo < 8210) {
        let x = 30
        stroke(60, 110, 113)
        strokeWeight(4)
        for (let y = 60; y < height - 60; y = y + 30) {
            line(300, 300, random(50, 550), 50);
        }
    }

}