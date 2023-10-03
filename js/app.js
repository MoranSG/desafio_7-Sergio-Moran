//1

console.log(document.querySelector("title"));




//3
function mostrarNombreYApellido1(){

arrayDeNombres = document.querySelectorAll(".section1 dd");
let nombreCompleto = "";
for(let i = 0; i <arrayDeNombres.length; i++){
    nombreCompleto  +=  arrayDeNombres[i].textContent + " ";
}
    return console.log("Integrante 1: " + '"' + nombreCompleto.trim() + '"');
}

function mostrarNombreYApellido2() {

    arrayDeNombres = document.querySelectorAll(".section2 dd");
    let nombreCompleto = "";
    for (let i = 0; i < arrayDeNombres.length; i++) {
        nombreCompleto += arrayDeNombres[i].textContent + " ";
    }
    return console.log("Integrante 1: " + '"' + nombreCompleto.trim() + '"');
}

mostrarNombreYApellido1();
mostrarNombreYApellido2();





//4
function mostrarCoincidencias() {
    arrayDeNombres1 = document.querySelectorAll(".section1 dd");
    arrayDeNombres2 = document.querySelectorAll(".section2 dd");
    let NombreQueCoincide = "";
    for (let i = 0; i < arrayDeNombres1.length; i++) {
        for (let j = 0; j < arrayDeNombres2.length; j++) {
            if (arrayDeNombres1[i].textContent === arrayDeNombres2[j].textContent) {
                NombreQueCoincide = arrayDeNombres1[i].textContent;
                console.log("Coinciden el nombre: " + NombreQueCoincide);
                let color = prompt("Hubo coincidencia, ingrese el color para resaltarlas")
                arrayDeNombres1[i].style.backgroundColor = color;
                arrayDeNombres2[j].style.backgroundColor = color;
            }
        }
    }
}

mostrarCoincidencias();
