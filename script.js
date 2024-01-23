let contador = 1;

console.log("1er Desafio: Contador = " + contador);

while (contador < 10) {
    contador += 1;
    console.log("Contador = " + contador);
}

console.log("2do Desafio: Contador = " + contador);

while(contador > 0) {
    contador -= 1;
    console.log("Contador = " + contador);
}

let cuentaProgresiva = prompt("Ecoge un numero y contare hasta llegar a ese numero: ");
console.log("3er Desafio: Contador = " + contador);

while(contador < cuentaProgresiva) {
    contador += 1;
    console.log("Contador = " + contador);
}


let numeroMaximo = prompt("Ingresa un número para la cuenta regresiva:");

while (numeroMaximo >= 0) {
console.log(numeroMaximo);
numeroMaximo--;
}
