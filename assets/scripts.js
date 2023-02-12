let dia = [];
let mes = [];
let año = [];

let fechaDeNacimiento = ["dia", "mes", "año"];


for (let i = 0; i < fechaDeNacimiento.length; i++){
    let fecha = parseInt(prompt("ingresa tu " + fechaDeNacimiento[i] + " de Nacimiento"));
        if (i === 0){
            dia = fecha;
        } else if (i === 1){
            mes = fecha;
        } else if (i === 2){
            año = fecha;
        } else {
            console.log("Alguno de los datos es incorrecto");
        }
}

console.log("Tu fecha de nacimiento es " + dia + "/" + mes + "/" + año)

function zodiaco () {
        //Aries
    if (dia >= 21 && dia <= 31 &&  mes == "3") {
        console.log("Tu sigo Zodiacal es Aries");
    } else if ( dia >= 1 && dia <= 19 &&  mes == "4" ) {
        console.log("Tu sigo Zodiacal es Aries");
        //Taurus
    } else if ( dia >= 20 && dia <= 30 &&  mes == "4" ) {
        console.log("Tu sigo Zodiacal es Taurus");
    } else if ( dia >= 1 && dia <= 20 &&  mes == "5" ) {
    console.log("Tu sigo Zodiacal es Taurus");
        //Gémini
    } else if ( dia >= 21 && dia <= 31 &&  mes == "5" ) {
    console.log("Tu sigo Zodiacal es Gémini");
    } else if ( dia >= 1 && dia <= 20 &&  mes == "6" ) {
    console.log("Tu sigo Zodiacal es Gémini");
        //Cancer
    } else if ( dia >= 21 && dia <= 30 &&  mes == "6" ) {
    console.log("Tu sigo Zodiacal es Cáncer");
    } else if ( dia >= 1 && dia <= 20 &&  mes == "7" ) {
    console.log("Tu sigo Zodiacal es Cáncer");
    //Leo
    } else if ( dia >= 21 && dia <= 31 &&  mes == "7" ) {
    console.log("Tu sigo Zodiacal es Leo");
    } else if ( dia >= 1 && dia <= 22 &&  mes == "8" ) {
    console.log("Tu sigo Zodiacal es Leo");
    //Virgo
    } else if ( dia >= 23 && dia <= 31 &&  mes == "8" ) {
    console.log("Tu sigo Zodiacal es Virgo");
    } else if ( dia >= 1 && dia <= 23 &&  mes == "9" ) {
    console.log("Tu sigo Zodiacal es Virgo");
    //Libra
    } else if ( dia >= 24 && dia <= 30 &&  mes == "9" ) {
    console.log("Tu sigo Zodiacal es Libra");
    } else if ( dia >= 1 && dia <= 23 &&  mes == "10" ) {
    console.log("Tu sigo Zodiacal es Libra");
    //Escorpio
    } else if ( dia >= 24 && dia <= 31 &&  mes == "10" ) {
    console.log("Tu sigo Zodiacal es Escorpio");
    } else if ( dia >= 1 && dia <= 22 &&  mes == "11" ) {
    console.log("Tu sigo Zodiacal es Escorpio");
    //Sagitarius
    } else if ( dia >= 23 && dia <= 30 &&  mes == "11" ) {
    console.log("Tu sigo Zodiacal es Sagitarius");
    } else if ( dia >= 1 && dia <= 22 &&  mes == "12" ) {
    console.log("Tu sigo Zodiacal es Sagitarius");
    //Capricornus
    } else if ( dia >= 23 && dia <= 31 &&  mes == "12" ) {
    console.log("Tu sigo Zodiacal es Capricornus");
    } else if ( dia >= 1 && dia <= 22 &&  mes == "1" ) {
    console.log("Tu sigo Zodiacal es Capricornus");
    //Aquarius
    } else if ( dia >= 23 && dia <= 31 &&  mes == "1" ) {
    console.log("Tu sigo Zodiacal es Aquarius");
    } else if ( dia >= 1 && dia <= 20 &&  mes == "2" ) {
    console.log("Tu sigo Zodiacal es Acuarius");
    //Piscis
    } else if ( dia >= 21 && dia <= 29 &&  mes == "2" ) {
    console.log("Tu sigo Zodiacal es Piscis");
    } else if ( dia >= 1 && dia <= 20 &&  mes == "3" ) {
    console.log("Tu sigo Zodiacal es Piscis");
    } 
    else {
        console.log("Revisa los parámetros ingresados, hubo un error")
    }
}
zodiaco()

