let data;
let maxCalidad;
let minCalidad;
let maxPrecio;
let minPrecio;
let maxAnio;
let minAnio;
let vinos;
let fondo;

let iSelect = -1

function preload() {
  data = loadJSON("./data/vinos_calidad.json");
  fondo = loadImage('Vinos.png');
}

function setup() {
  createCanvas(1280, 1024);

  /* Máximos y mínimos */
  maxCalidad = data.maxCalidad;
  minCalidad = data.minCalidad;
  maxPrecio = data.maxPrecio;
  minPrecio = data.minPrecio;
  maxAnio = data.maxAnio;
  minAnio = data.minAnio;
  /* Lista de objetos */
  vinos = data.vinos;


  console.log("maxCalidad: " + maxCalidad)
  console.log("minCalidad: " + minCalidad)
  console.log("maxPrecio: " + maxPrecio)
  console.log("minPrecio: " + minPrecio)
  console.log("maxAnio: " + maxAnio)
  console.log("minAnio: " + minAnio)
  /* Fin log de datos */

}

function draw() {
  noCursor()
  
  background(0);
  image(fondo, 0, 0, width, width * fondo.height / fondo.width);

  for (let i = 0; i < vinos.length - 15; i++) {
    // 410 la y del primer rectangulo * 38 deja espacio entre medio de los rect
    let y = 410 + i * 38;

    // paramentros para el hover para la primera columna
    if (mouseX >= 700 && mouseX <= 850 && mouseY >= y && mouseY <= y + 30) {
      iSelect = i
      mostrarCirculo(vinos[i]);
      mostrarAnio(vinos[i]);
      fill(128, 0, 50, 50)
    } else {
      noFill()
      noStroke()
    }

    // dimensiones del rect para seleccionar los vinos
    rect(700, y, 165, 30)

    // mostrar los siguientes 15 en una fila al lado (si  llega a 15...)

    if (i < 15) {
      //nueva posicion de los rect del menu (porque empiezan una linea a la derecha)
      let y2 = 410 + i * 38;
      if (mouseX >= 1000 && mouseX <= 1200 && mouseY >= y2 && mouseY <= y2 + 30) {
        iSelect = i + 15;
        mostrarCirculo(vinos[i + 15]);
        mostrarAnio(vinos[i + 15]);
        fill(128, 0, 50, 50)
      } else {
        noFill();
        noStroke();
      }

      rect(980, y2, 165, 30);
    }

  }

  // que siga el mouse una gotita
  fill(128, 0, 50)
  ellipse(mouseX, mouseY, 20)

}

//en el parentesis despues se pone el index, para que vaya mostrando los vinos que corresponden a cada nombre

function mostrarCirculo(vino) {
  // diam = precio
  let diametro = map(vino.precio, maxPrecio, minPrecio, 400, 100)
  //opacidad = calidad
  let opacidad = map(vino.calidad, maxCalidad, minCalidad, 255, 25)

  // si es tinto = elipse roja y es blanco/otro = amarilla
  if (vino.tinto) {
    fill(128, 0, 50, opacidad)
    noStroke()
  } else {
    noStroke()
    fill(200, 240, 100, opacidad)
  }

  // data que muestra la elipse, todos en el mismo centro
  ellipse(313, 359, diametro)
}

function mostrarAnio(vino) {
  // movmieto vertical = timeline
  let altura = map(vino.anio, maxAnio, minAnio, 560, 850)

  stroke(0)
  strokeWeight(4)
  fill(232, 229, 227)
  // x fija y se mueve en el eje y
  ellipse(313, altura, 60)

  // año del vino
  noStroke()
  fill(0)
  textFont("Montserrat")
  textAlign(CENTER);
  textSize(14)
  text(vino.anio, 313, altura);
}
