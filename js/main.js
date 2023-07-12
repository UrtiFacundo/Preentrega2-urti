const servicios = [
    { titulo: "Branding", precio: 5300},
    { titulo: "Publicidad", precio: 15100},
    { titulo: "Social Media", precio: 6700},
    { titulo: "Web Development", precio: 12900}

];
let servicioElegido = prompt("ingrese el servicio que desea adquirir \n1. Branding. \n2. Publicidad. \n3. Social Media. \n4. Web Development.");

console.log( servicios.find((servicios) => servicios.titulo === servicioElegido ) );

const boxes = [
    { titulo: "Branding y Web Development", precio: 18200},
    { titulo: "Publicidad y Social Media", precio: 21800},
]

//const descuento = 20
let BoxesElegido = prompt("ingrese el boxes que desea adquirir \n1. Branding y Web Development. \n2. Publicidad y Social Media. ");

console.log( boxes.find((boxes) => boxes.titulo === BoxesElegido ) );


function aplicarPorcentaje(boxes, descuento) {
    const resultado = [];
    for (let i=0; i<boxes.length; i++){
        const precio = boxes[i];
        const procentajeAplicado = precio * (20/100);
    resultado.push(porcentajeAplicado);
    }
    return resultado;
}
const numerosConPorcentajes = aplicarPorcentaje(boxes.length, 20);

console.log(numerosConPorcentajes);


