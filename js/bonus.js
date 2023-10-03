//1

console.log(document.querySelector("title"));

//3 y 4


boton1 = document.querySelector(".boton1");
boton1.onclick = function () {
    const arrayDeNombres1 = document.querySelectorAll(".section1 input");
    let nombreCompleto = "";
    for (let i = 0; i < arrayDeNombres1.length; i++) {
        nombreCompleto += arrayDeNombres1[i].value + " ";
    }
    console.log("Integrante 1: " + '"' + nombreCompleto.trim() + '"');

}

boton2 = document.querySelector(".boton2");
boton2.onclick = function(){
    arrayDeNombres1 = document.querySelectorAll(".section1 input");
    arrayDeNombres2 = document.querySelectorAll(".section2 input");

    let nombreCompleto = "";
    for (let i = 0; i < arrayDeNombres1.length; i++) {
        nombreCompleto += arrayDeNombres1[i].value + " ";
    }
    console.log("Integrante 2: " + '"' + nombreCompleto.trim() + '"');


    let NombreQueCoincide = "";
    for (let i = 0; i < arrayDeNombres1.length; i++) {
        for (let j = 0; j < arrayDeNombres2.length; j++) {
            if (arrayDeNombres1[i].value === arrayDeNombres2[j].value) {
                NombreQueCoincide = arrayDeNombres1[i].value;
                console.log("Coinciden el nombre: " + NombreQueCoincide);
                let color = prompt("Hubo coincidencia, ingrese el color para resaltarlas")
                arrayDeNombres1[i].style.backgroundColor = color;
                arrayDeNombres2[j].style.backgroundColor = color;
            }
        }
    }
}
