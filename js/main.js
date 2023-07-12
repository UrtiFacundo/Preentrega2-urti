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

let BoxesElegido = prompt("ingrese el boxes que desea adquirir \n1. Branding y Web Development. \n2. Publicidad y Social Media. ");

console.log( boxes.find((boxes) => boxes.titulo === BoxesElegido ) );

const porcentaje = 0.2;

const actualizarBoxes = boxes.map(boxes =>{
    const descontarPrecio = boxes.precio - (boxes.precio * porcentaje);
    return {...boxes, precio: descontarPrecio};
});
console.log(actualizarBoxes);



