// Exercicio triangulos
function triangulo(lado1, lado2, lado3){
    if ( (lado1==lado2) && (lado1==lado3)){
        console.log("equilatero");
    }else if ((lado1!==lado2) && (lado2!==lado3) && (lado1!==lado3)){
        console.log("escaleno");
    }else{
        console.log("isosceles");
    }
}

lado1 = 1, lado2 = 1, lado3 = 2;
triangulo(lado1, lado2, lado3);

lado1 = 1, lado2 = 1, lado3 = 1;
triangulo(lado1, lado2, lado3);

lado1 = 1, lado2 = 3, lado3 = 2;
triangulo(lado1, lado2, lado3);
