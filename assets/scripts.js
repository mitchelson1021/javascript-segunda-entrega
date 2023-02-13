


let fechaDeNacimiento = ["dia", "mes", "año"];


/* for (let i = 0; i < fechaDeNacimiento.length; i++){
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
} */




//console.log("Tu fecha de nacimiento es " + dia + "/" + mes + "/" + año)

function zodiaco () {
    let dia = document.getElementById("dia");
    let mes = document.getElementById("mes");
    let año = document.getElementById("anio");
    let mensaje = document.getElementById("mansaje");
    console.log("Tu fecha de nacimiento es " + dia.value + "/" + mes.value + "/" + año.value)


        //Aries
    if (dia.value >= 21 && dia.value <= 31 &&  mes.value == "3") {
        console.log("Tu sigo Zodiacal es Aries");
    } else if ( dia.value >= 1 && dia.value <= 19 &&  mes.value == "4" ) {
        console.log("Tu sigo Zodiacal es Aries");
        //Taurus
    } else if ( dia.value >= 20 && dia.value <= 30 &&  mes.value == "4" ) {
        console.log("Tu sigo Zodiacal es Taurus");
    } else if ( dia.value >= 1 && dia.value <= 20 &&  mes.value == "5" ) {
    console.log("Tu sigo Zodiacal es Taurus");
        //Gémini
    } else if ( dia.value >= 21 && dia.value <= 31 &&  mes.value == "5" ) {
    console.log("Tu sigo Zodiacal es Gémini");
    } else if ( dia.value >= 1 && dia.value <= 20 &&  mes.value == "6" ) {
    console.log("Tu sigo Zodiacal es Gémini");
        //Cancer
    } else if ( dia.value >= 21 && dia.value <= 30 &&  mes.value == "6" ) {
    console.log("Tu sigo Zodiacal es Cáncer");
    } else if ( dia.value >= 1 && dia.value <= 20 &&  mes.value == "7" ) {
    console.log("Tu sigo Zodiacal es Cáncer");
    //Leo
    } else if ( dia.value >= 21 && dia.value <= 31 &&  mes.value == "7" ) {
    console.log("Tu sigo Zodiacal es Leo");
    } else if ( dia.value >= 1 && dia.value <= 22 &&  mes.value == "8" ) {
    console.log("Tu sigo Zodiacal es Leo");
    //Virgo
    } else if ( dia.value >= 23 && dia.value <= 31 &&  mes.value == "8" ) {
    console.log("Tu sigo Zodiacal es Virgo");
    } else if ( dia.value >= 1 && dia.value <= 23 &&  mes.value == "9" ) {
    console.log("Tu sigo Zodiacal es Virgo");
    //Libra
    } else if ( dia.value >= 24 && dia.value <= 30 &&  mes.value == "9" ) {
    console.log("Tu sigo Zodiacal es Libra");
    } else if ( dia.value >= 1 && dia.value <= 23 &&  mes.value == "10" ) {
    console.log("Tu sigo Zodiacal es Libra");
    //Escorpio
    } else if ( dia.value >= 24 && dia.value <= 31 &&  mes.value == "10" ) {
    console.log("Tu sigo Zodiacal es Escorpio");
    } else if ( dia.value >= 1 && dia.value <= 22 &&  mes.value == "11" ) {
    console.log("Tu sigo Zodiacal es Escorpio");
    //Sagitarius
    } else if ( dia.value >= 23 && dia.value <= 30 &&  mes.value == "11" ) {
    console.log("Tu sigo Zodiacal es Sagitarius");
    } else if ( dia.value >= 1 && dia.value <= 22 &&  mes.value == "12" ) {
    console.log("Tu sigo Zodiacal es Sagitarius");
    //Capricornus
    } else if ( dia.value >= 23 && dia.value <= 31 &&  mes.value == "12" ) {
    console.log("Tu sigo Zodiacal es Capricornus");
    } else if ( dia.value >= 1 && dia.value <= 22 &&  mes.value == "1" ) {
    console.log("Tu sigo Zodiacal es Capricornus");
    //Aquarius
    } else if ( dia.value >= 23 && dia.value <= 31 &&  mes.value == "1" ) {
    console.log("Tu sigo Zodiacal es Aquarius");
    } else if ( dia.value >= 1 && dia.value <= 20 &&  mes.value == "2" ) {
    console.log("Tu sigo Zodiacal es Acuarius");
    //Piscis
    } else if ( dia.value >= 21 && dia.value <= 29 &&  mes.value == "2" ) {
    console.log("Tu sigo Zodiacal es Piscis");
    } else if ( dia.value >= 1 && dia.value <= 20 &&  mes.value == "3" ) {
    console.log("Tu sigo Zodiacal es Piscis");
    } 
    else {
        console.log("Revisa los parámetros ingresados, hubo un error")
    }
}
zodiaco()

