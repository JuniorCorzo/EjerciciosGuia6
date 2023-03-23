function edades(){
    const input = require('prompt-sync')({sigint:true});
    let edad;
    let arrEdades = [];
     while (arrEdades.length < 10){
        edad = parseInt(input("Ingrese la edad de la persona: "));
        if (edad > 0 && edad <= 120){
            arrEdades.push(edad);
        } else{
            console.log("El rango de edad es entre 1 y 120 años")
        }
    }

    let menoresEdad = 0;
    let mayoresEdad = 0;
    let terceraEdad = 0;
    let promedioEdad = 0;
    arrEdades.forEach(item =>{
        if (item >= 18) mayoresEdad++;
        if (item < 18) menoresEdad++;
        if (item >= 60) terceraEdad++;

        promedioEdad += item; 
    })
   
    console.log("Hay ", menoresEdad, " menores de edad")
    console.log("Hay ", mayoresEdad, " mayores de edad")
    console.log("Hay ", terceraEdad, " adultos mayores de edad")
    console.log("El promedio de edad es: ", promedioEdad/arrEdades.length)
}

edades();