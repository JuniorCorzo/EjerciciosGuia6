function crearVector(){
    let arr = [];
    let num;

    const input = require('prompt-sync')({sigint:true});
    arr.push(parseInt(input("Ingrese un numero: ")))
    let index = 0
    while (arr.length < 5){
        num = parseInt(input("Ingrese un numero: "))
        if (arr[index] < num){
            arr.push(num)
            index++
        } else{
            console.log("Los numeros van de forma ascendentes")
        }
    }
    return arr
}

// function compareNumber(a, b){
//     return a - b;
// }
function unirVectores(){
    let arr = crearVector()
    console.log("-----------Segundo Vector------------")
    let arr2 = crearVector()

    arr2.forEach(item =>{
        arr.push(item)
    })

    arr.sort((a, b)=> a - b)
    console.log(arr)
}

unirVectores()