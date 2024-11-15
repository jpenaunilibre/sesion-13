// función suma
function suma(a,b){
    return a+b;
}

// función resta

function resta(a,b){
    return a-b;
}

// función multiplicación
function multiplicacion(a,b){
    return a*b;
}

// función división
function division(a,b){
    if (b === 0){
        return "Error en la divión, no se puede divir entre 0"
    } return a/b;
 }


// función calculadora

function calculadora(num1, num2, operacion){
    switch(operacion){
        case 'suma' :
            return suma(num1, num2);
        case 'resta' :
            return resta(num1, num2);
        case 'multiplicacion' :
            return multiplicacion(num1, num2);
        case 'division' :
            if(num2 !== 0){
                return division(num1, num2);
            } else{
                return "Error en la divión, no se puede divir entre 0"
            }
    }
}
let numero1 = parseFloat(prompt("Ingrese el primer número"));
let numero2 = parseFloat(prompt("Ingrese el segundo número"));

let operacion = prompt("Ingrese la operación(suma, resta, division, multiplicacion)")

let resultado = calculadora(numero1, numero2, operacion);

document.write("El resultado es: ", + resultado);