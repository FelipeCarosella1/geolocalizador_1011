var lati; // variable de latitud
var lon; // variable de longitud
let canvas;
let myMap;
var archivo

function preload () {
// lee el archivo de texto y coloca su contenido en una 
// matriz de cadena con un elemento de matriz por linea en un archivo fuente
  archivo = loadStrings ('cordenadas.csv'); // siempre debe estar en preload para que funcione
}
function setup() {
    canvas = createCanvas(displayWidth,displayHeight); // crea el linezo de 200x200}
    if('geolocation' in navigator) {
        /* geolocation is available */
        console.log('geolocation funcionando');
        // getCurrentPosition() se usa para obtener la posicion de un dispositivo 
        navigator.geolocation.getCurrentPosition(async position => {
            // console.log(position);
            lati = position.coords.latitude; // obtenemos latitud
            lon = position.coords.longitude; // obtenermos longitud
            console.log(lati.toFixed(2)); // visualizamos latitud en modo progrmador
            console.log(lon); // visualizamos longitud en modo programador 
            initMap(lati,lon)
            });
    } else {
        /* geolocation IS NOT available */
        console.log('geolocation NO funcionando');
    };
    console.log(lon);
    leerArchivo()
    }

function draw () {
textSize(16); // fija el tamaño del texto
text("latitud",20,30); // imprime el texto en posicion x, y 
text(lati,85,30); // imprime variable en posicion x,y
text("longitud",20,50); // imprime el texto en posicion x,y
text(lon,85,50); // imprime variable en posicion x,y
  }

function initMap(lati,lon){
    const mappa = new Mappa('Leaflet');;
    const options = {
    lat: lati,
    lng: lon,
    zoom: 6,
    style: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png'
    }
    myMap = mappa.tileMap(options);
    myMap.overlay(canvas);
    marcador();
    myMap.onChange(marcador);
}

function marcador(){
    clear()
    let marcador = myMap.latLngToPixel(lati,lon);
    imagen = createImg("agua_enojada.jpg");
    imagen.hide();
    image(imagen,marcador.x,marcador.y,35,35);
}

function leerArchivo() {
        var data = $.csv.toObjects(csv);
        print(data)

}