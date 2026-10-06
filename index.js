//Ejercicio 1
let variableSinValor;

//Ejercicio 2
let booleano1 = true;
let booleano2 = false;

//Ejercicio 3
const PI = 3.14;

//Ejercicio 4
const TAU = 2 * PI;

//Ejercicio 5
let booleanoAnd = booleano1 && booleano2;

//Ejercicio 6
let booleanoNot = !booleano1;

//Ejercicio 7
let booleanoMix0 =
  (booleano1 || !booleano2) && (booleano1 || (!booleano1 && !booleano2));

//Ejercicio 8
let incrementarDesp = 2;
let resultadoDesp = incrementarDesp++;

//Ejercicio 9
let incrementarPre = 2;
let resultadoPre = ++incrementarPre;

//Ejercicio 10
let contarHasta_10 = 0;
for (let i = 0; i < 10; i++) {
  contarHasta_10++;
}

//Ejercicio 11
let postL = 0;
let postJ = 0;
for (let i = 0; i < 11; i++) {
  postL += postJ++;
}

//Ejercicio 12
let sumaPares = 0;
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    sumaPares += i;
  }
}
