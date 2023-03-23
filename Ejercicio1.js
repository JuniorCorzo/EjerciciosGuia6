
function trianguloArea(b, h){
    return "El area del triangulo es: " + ((b * h) / 2);
}
function trianguloPerimetro(a, b, c){
    return "El perimetro del triangulo es: " + (a + b + c);
}

function rectanguloArea(b, a){
    return "El area del rectangulo es: " + b * a;
}

function rectanguloPerimetro(b, a){
    return "El perimetro del rectangulo es: " + 2 * (a + b)
}

function cuadradoArea(a){
    return "El area del cuadrado es: " + a ** 2;
}

function cuadradoPerimetro(a){
    return "El perimetro del cuadrado es: " + 4 * a;
}

function circuloArea(r){
    return "El area del circulo es: " + Math.PI * r ** 2;
}

function circuloPerimetro(r){
    return "El perimetro del circulo es: " + 2 * Math.PI * r **2
}

console.log(trianguloArea(2, 3))
console.log(trianguloPerimetro(2, 5, 3))
console.log(rectanguloArea(2, 3))
console.log(rectanguloPerimetro(2, 3))
console.log(cuadradoArea(2))
console.log(cuadradoPerimetro(2))
console.log(circuloArea(3))
console.log(circuloPerimetro(3))