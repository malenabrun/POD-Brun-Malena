let frames = [
    'foto_4.png',
    'foto_7.png',
    'foto_6.png',
    'foto_1.png',
    'foto_3.png',
    'foto_5.png',
    'foto_2.png',
]

let fondo = 'fondo.jpeg'

    let imagloaded = []
    let i = 0
    let prop
    let iterationCount = 0

    function preload() {
    let path
    
        for (let index = 0; index < frames.length ; index++) {
            // cargar las fotos
            path = 'fotos/' + frames[index]
            imagloaded[index] = loadImage(path)
            path = 'fotos/' + 'fondo.jpeg'
            fondo = loadImage(path)
            console.log(path)
            console.log(imagloaded[index])
        }
        
    }
    
    
    function setup(){
        createCanvas(500, 500)
        image(fondo, 0, 0, width, width * prop)
        
        // como hacer pare que sea del tamaño de la foto = prop
        frameRate(5)
        
        prop = imagloaded[0].height/imagloaded[0].width
        
    }
    
    function draw(){

        
        let tamaño = width/2
        let escala = random(1.2, 1.4)

        image(imagloaded[i], random(-60, 250), random(-60, 250), tamaño * escala, tamaño * prop * escala)
        // usando la proporcion que establecimos en setup
        i = i + 1
    
        if (i >= imagloaded.length) {
            noLoop()
        } else {
            i = i + 0
        }
    
        console.log(i)

    }    


    function keyPressed() {

        if(key == 'Enter') {
            saveCanvas('poster', 'png')
        }
    }