let song
let fft
let amp

let level
let duration
let currentTime
let wave

let offsetX
let offsetY
let estado = '0'

let prop
let caminata

let vid
let gif
let gif2

let particles = []; // array of vectors. Despues defino cunatas particulas quiero
let num = 1000
let noiseScale = 0.02 // el movimiento +- de cada linea. Mas o menos recto

let velocidad = 4
let x = -500

let xspacing = 4.75; // Distancia entre cada bolita

function preload() {
  
  song = loadSound('audio/LaPanteraRosa.mp3')
  menu = loadImage('imagenes/PANTERA ROSA MENU.png')
  icono = loadImage('imagenes/iconoMenu.png')
  vid = createVideo('imagenes/INTRO_PR.mp4');
  vid.hide()
  gif = createImg('imagenes/pink-panther-walk.gif')
  gif.hide()
  gif2 = createImg('imagenes/PRG.gif')
  gif2.hide()
  
}


function setup() {
  createCanvas(windowWidth, windowHeight)
  rectMode(CENTER)
  angleMode(DEGREES)
  /* Creamos un objeto FFT */
 
  let bins = 128
  fft = new p5.FFT(1, bins)
  amp = new p5.Amplitude()
  duration = song.duration()

  offsetX = width / bins
  offsetY = height / bins

  vid.size(width, height)
  vid.position(0, 0)
  
  prop = height/width

  // para printBurbujas
  for (let i = 0; i < num*10; i ++) {
    particles.push (createVector(random(width), random(height)))
    stroke(255)
  }
}

function draw() {
  background(5);
  noCursor()
  // -20 para que este en el centro del mouse
  image(icono, mouseX - 20, mouseY - 20, height / 20, height / 20)

  // mouseY controla el volumen
  let vol = 1 - map(mouseY, 0, 400, 0, 1)
  song.setVolume(vol)
  
  // obtenemos un array con los picos de la canción
  wave = fft.waveform()
  // obtenemos el nivel de amplitud
  level = amp.getLevel()
  // obtenemos el tiempo actual de la canción
  currentTime = song.currentTime()

//text(currentTime, 100, height/2)

  if (!song.isPlaying()) {
    printInstrucciones()
  } else {
    if (estado == '1') {
      printOvalos(width * 63)
    } else if (estado == '2') {
      printParticulas()
    } else if (estado == '3') {
      printArco()
    } else if (estado == '4') {
      printBolita()
    } else if (estado == '5') {
      printOla()
    } else if (estado == '6') {
      printCirculosDrop()
    }  else if (estado == '7') {
      printFondo()
    } else if (estado == '0') {

      if (currentTime < 7.8) {
        printGif()
      } else if (currentTime < 11.5){
        printFondo()
      } else if (currentTime < 15.3){
        printFondo()
        printParticulas()
      } else if (currentTime < 19.3) {
        printFondo()
        printParticulas()
        printArco()
      } else if (currentTime < 30.3){
        printFondo()
        printParticulas()
        printArco()
        printOvalos(width * 1)
       } else if (currentTime < 58.0) {
        printFondo()
        printParticulas()
        printArco()
        printBolita()
        printOvalos(width * 1)
      } else if (currentTime < 60.0){
        guineo()
      } else if (currentTime < 61.0){
        gif2.hide()
        printFondo()
        printParticulas()
        printArco()
        printOvalos(width * 1)  
        printBolita() 
        printCirculosDrop()
        printOla()
      } else if (currentTime < 92.9972125){
        printFondo()
        printParticulas()
        printArco()
        printOvalos(width * 1)  
        printBolita() 
        printCirculosDrop()
        printOla()
      }
      
      //menu que se despliega
      distMouseCentro = dist(width / 12, width / 12, mouseX, mouseY)
      arriba = distMouseCentro > width / 6
      if (arriba) {
        image(icono, 50, 50, height / 12, height / 12)
      } else {
        image(menu, 0, 0, height / 2, height / 2)
      }

    }
  }
}


function keyPressed() {
  if (key == 'Shift') {
    if (song.isPlaying()) {
      song.pause()
      gif.hide()
    } else {
      song.play()
      vid.hide()
      currentTime = 0
    }
  } else if (key == '0' || key == '1' || key == '2' || key == '3' || key == '4' || key == '5'|| key == '6'|| key == '7') {
    estado = key
  } 
}

function printOvalos() { // elipse
  // push, pop = para que el translate solo afecte esto
  push()
  translate(width / 2, height / 2)
  //rotateX(60)
  strokeWeight(2)
  let b = map(currentTime, 0, duration, 0, 255)
  noStroke()
  fill(210, 100, b, 100)

  // queria que empiece de un color y temine de otro como medida del tiempo que paso en la cancion

  for (let i = 0; i < 14; i += 2) {
    //    noFill()
    beginShape();
    for (let k = 0; k < 360; k += 10) {
      let alto = map(wave[i], 0, 1, 0, 200); //si le cambio a levels se pone estatico pero al ritmo de los beats altos
      //      let lev = map(level[alto], 0, 1, 0, 250)
      let r = i * 10 + alto; // afecta al diametro la musica
      let x = r * cos(k); // necesario cos y sin? !!
      let y = r * sin(k);
      vertex(x, y);
    }
    endShape(CLOSE);
  }
  pop()

}

function printParticulas() { // ola

  for (let i = 0; i < width; i += 5) {
    noFill()
    strokeWeight(1.5)
    stroke(255)
    
    let index = floor(map(i, 0, width, 0, wave.length))

    // hay 1024 elementos, hay que linkearlos a la wave para que queremos -- para que sea un numero ENTERO, le ponemos floor
    let x = i
    let y = wave[index] * 300 + height - 20

    point(x, y)
    point(x, y - height/1.2 - 60)

  }
}

function printArco() { // semicirc

  push()
  translate(width, height / 2) // para mover al centro
  rotate(180) // rota mi semic
  strokeWeight(1)
  stroke(255)
  beginShape()
  for (let i = 0; i <= 180; i += 1) { // 180 = mediocirc ; si hago i += 0.5 es menos el waveform
    let index = floor(map(i, 0, 180, 0, wave.length - 1))
    noFill()
    let r = map(wave[index], -1, 1, 100, 250) // ultimos dos son el minimo y maximo del circulo
    // map adentro de otro map para que me base el radio del semicirc con el wavelength

    // hay 1024 elementos, hay que linkearlos a la wave para que queremos -- para que sea un numero ENTERO, le ponemos floor
    let x = r * sin(i) // polar coordinates
    let y = r * cos(i)
    vertex(x, y) 

  }

  endShape()
  pop()

  push()
  translate(0, height / 2) // para mover al centro
  rotate(360) // rota mi semic
  strokeWeight(1)
  stroke(255)
  beginShape()
  for (let i = 0; i <= 180; i += 1) { // 180 = mediocirc ; si hago i += 0.5 es menos el waveform
    let index = floor(map(i, 0, 180, 0, wave.length - 1))
    noFill()
    let r = map(wave[index], -1, 1, 100, 250) // ultimos dos son el minimo y maximo del circulo
    // map adentro de otro map para que me base el radio del semicirc con el wavelength

    // hay 1024 elementos, hay que linkearlos a la wave para que queremos -- para que sea un numero ENTERO, le ponemos floor
    let x = r * sin(i) // polar coordinates
    let y = r * cos(i)
    vertex(x, y) 

  }
  endShape()
  pop()
}

function printBolita() {
  push()

  //cambia el color con el transcurso de la cancion
  let b = map(currentTime, 0, duration, 0, 255)
  noStroke()
  fill(210, 100, b, 100)

  for (let i = 0; i < wave.length; i++) {
  
    let alto = map(wave[i], 0, 1, 0, height)
    ellipse(width / 2 + alto, height/2, 60)
    
  }

  pop()
}

function printCirculosDrop(){

  let b = map(currentTime, 0, duration, 0, 255)
  noStroke()
  fill(210, 100, b, 100)

  for (let i = 0; i < wave.length; i++) {
    diam = map(wave[i], 0, 1, 0, 50)
    ellipse(random(0, width), random(0, height), diam)
  }
}

function printOla() {
  let b = map(currentTime, 0, duration, 0, 255)
  
  for (let i = 0; i < width; i += 5) {
    noFill()
    strokeWeight(1.5)
    stroke(255)
    
    let index = floor(map(i, 0, width, 0, wave.length))

    // hay 1024 elementos, hay que linkearlos a la wave para que queremos -- para que sea un numero ENTERO, le ponemos floor
    let x =  i
    let y = wave[index] * 300 + height 

    noStroke()
    fill(210, 100, b)
    ellipse(x * xspacing, y - height/2, 10)

  }
}

function printInstrucciones() {
vid.play()
vid.show()
loop()
}

function printGif() {
  gif.show()
  gif.size(width/2.3, width * prop /2)
  gif.position(x, windowHeight/3)

  x = x + velocidad
}

function guineo(){
  gif2.show()
  gif2.size(width, height)
  gif2.position(0, 0)
}

function printFondo() {
  push()
  stroke (200,100)
  noFill()

  for (let i = 0; i < wave.length; i++) {
    let p = particles[i];
    ellipse (p.x,p.y,10)
    // ellipse (p.x,p.y,diam)
    //point(p.x,p.y) // posicion x e y
    let n = noise(p.x * noiseScale, p.y * noiseScale)
    let a = map(level, 0, 1, 0, 600) * n //map(n,0,1); two_pi = tau --- cambia la direccion
    p.x += cos(a) // le da la forma de ola
    p.y += sin(a)

    if(!onScreen(p)){
      p.x = random(width);
      p.y = random(height)
    }
  }
  pop()
    
}

function onScreen(v) {
  return v.x >= 0 && v.x <= width && v.y <= height;
}