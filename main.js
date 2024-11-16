//1. Contar vocales en una cadena
function contarVocales(texto) {
  if (typeof texto !== "string") {
    throw new TypeError("La entrada debe ser una cadena de texto");
  }

  const vocales = "aeiouáéíóúAEIOUÁÉÍÓÚ";
  let contador = 0;

  for (let letra of texto) {
    if (vocales.includes(letra)) {
      contador++;
    }
  }

  return contador;
}
/*
Primero se valida que la entrada sea una cadena de texto. Luego, se crea una variable que contiene todas las vocales posibles. Se inicializa un contador en 0 y se recorre cada letra del texto. Si la letra es una vocal, se incrementa el contador. Al final, se retorna el contador con la cantidad de vocales encontradas.
*/

var cadenas = ["¿cómo estás?", "  í", " "];
console.log(`
- - - - - - - - - - - - - - - - - - - - - - - - - - - 
Solución 1. Contar vocales en una cadena
- - - - - - - - - - - - - - - - - - - - - - - - - - -

Cantidad de vocales en "${cadenas[0]}": ${contarVocales(cadenas[0])}  
Cantidad de vocales en "${cadenas[1]}": ${contarVocales(cadenas[1])}  
Cantidad de vocales en "${cadenas[2]}": ${contarVocales(cadenas[2])}  

`);

/*---------------------------------------------------------------------------*/

//2. Muestra el mayor número de un array
function encontrarNumeroMayor(numeros) {
  if (!Array.isArray(numeros)) {
    throw new TypeError("La entrada debe ser un array");
  }

  if (numeros.length === 0) {
    throw new Error("El array no puede estar vacío");
  }

  let mayor = numeros[0];

  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > mayor) {
      mayor = numeros[i];
    }
  }

  return mayor;
}
/*
Primero se valida que la entrada sea un array y que no esté vacío. Se inicializa una variable con el primer elemento del array y se recorre el array desde el segundo elemento. Si se encuentra un número mayor que el actual, se actualiza la variable que guarda al mayor. Al final, se retorna el número mayor encontrado.
*/

var arrays = [
  [1, 6, 2, 32, -4, 5],
  [-10, -205, -30, -404, -50],
  [0, 0, 0, 0, 0],
];

console.log(`
- - - - - - - - - - - - - - - - - - - - - - - - - - - 
Solución 2. Muestra el mayor número de un array
- - - - - - - - - - - - - - - - - - - - - - - - - - -

Entre los números ${arrays[0]}, el mayor es ${encontrarNumeroMayor(arrays[0])}  
Entre los números ${arrays[1]}, el mayor es ${encontrarNumeroMayor(arrays[1])}  
Entre los números ${arrays[2]}, el mayor es ${encontrarNumeroMayor(arrays[2])}  

`);

/*---------------------------------------------------------------------------*/

//3. Calcular la media de un array de números
function calcularMedia(numeros) {
  if (!Array.isArray(numeros) || numeros.length === 0) {
    throw new Error("Debe proporcionar un array no vacío");
  }

  let suma = 0;
  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }

  let media = suma / numeros.length;
  return media;
}
/*
Primero se valida que la entrada sea un array y que no esté vacío. Se inicializa una variable en 0 para guardar la suma de los números. Se recorre el array y se suman todos los números. Al final, se divide la suma entre la cantidad de números para obtener la media.
*/

var arrays = [
  [1, 2, 2, 1],
  [-10, -20],
  [0, 0, 0, 0, 0],
];

console.log(`
- - - - - - - - - - - - - - - - - - - - - - - - - - - 
Solución 3. Calcular la media de un array de números
- - - - - - - - - - - - - - - - - - - - - - - - - - -

La media de los los números ${arrays[0]}, es ${calcularMedia(arrays[0])}  
La media de los números ${arrays[1]}, es ${calcularMedia(arrays[1])}  
La media de los números ${arrays[2]}, es ${calcularMedia(arrays[2])}  

`);

/*---------------------------------------------------------------------------*/

//4. Invertir los elementos de un array
function invertirArray(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Debe proporcionar un array");
  }
  return arr.reverse();
}
/*
Primero se valida que la entrada sea un array. Luego, se retorna el array invirtiéndolo con el método reverse(). =)
*/

var arrays = [
  [1, 2, 3, 4],
  [-10, -20],
  [0, 0, 0, 0, 0],
];

console.log(`
- - - - - - - - - - - - - - - - - - - - - - - - - - - 
Solución 4. Invertir los elementos de un array
- - - - - - - - - - - - - - - - - - - - - - - - - - -

Array ${arrays[0]}. Invertido: ${invertirArray(arrays[0])}   
Array ${arrays[1]}. Invertido: ${invertirArray(arrays[1])}   
Array ${arrays[2]}. Invertido: ${invertirArray(arrays[2])}   


`);

/*---------------------------------------------------------------------------*/

//5. Eliminar elementos duplicados de un array
function eliminarDuplicados(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Debe proporcionar un array");
  }
  let sinDuplicados = new Set(arr);

  return Array.from(sinDuplicados);
}
/* 
Primero se valida que la entrada sea un array. Luego, se crea un nuevo Set a partir del array (los Set no permiten elementos duplicados). Se convierte el Set en un array con Array.from() y se retorna.
*/
var arrays = [
  [1, 2, 2, 4],
  [-10, 0, -20, 0],
  [0, 0, 0, 0, 0],
];

console.log(`
- - - - - - - - - - - - - - - - - - - - - - - - - - - 
Solución 5. Eliminar elementos duplicados de un array
- - - - - - - - - - - - - - - - - - - - - - - - - - -

Array ${arrays[0]}. Sin duplicados: ${eliminarDuplicados(arrays[0])}   
Array ${arrays[1]}. Sin duplicados: ${eliminarDuplicados(arrays[1])}   
Array ${arrays[2]}. Sin duplicados: ${eliminarDuplicados(arrays[2])}   


`);

/*---------------------------------------------------------------------------*/

//6. Convertir la primera letra de cada palabra en mayúscula
function capitalizarTexto(texto) {
  if (typeof texto !== "string") {
    throw new Error("Debe proporcionar una cadena de texto");
  }

  return texto
    .split(" ")
    .map((palabra) => {
      if (palabra.length === 0) return palabra;
      return palabra[0].toUpperCase() + palabra.slice(1);
    })
    .join(" ");
}
/**
Primero se valida que la entrada sea una cadena de texto. Se divide el texto en palabras con split(" "). Se mapea cada palabra y se convierte la primera letra en mayúscula y el resto en minúscula. Al final, se unen las palabras con join(" ").
*/
var cadenas = ["cómo estás?", "aaaa", " ab b ab "];
console.log(`
- - - - - - - - - - - - - - - - - - - - - - - - - - - 
Solución 6. Convertir la primera letra de cada palabra en mayúscula
- - - - - - - - - - - - - - - - - - - - - - - - - - -

Cadena: "${cadenas[0]}". Capitalizada: ${capitalizarTexto(cadenas[0])}  
Cadena: "${cadenas[1]}". Capitalizada: ${capitalizarTexto(cadenas[1])}  
Cadena: "${cadenas[2]}". Capitalizada: ${capitalizarTexto(cadenas[2])}  

`);

/*---------------------------------------------------------------------------*/

//7. Generar los primeros N números de la sucesión de Fibonacci
function fibonnacci(n) {
  if (!Number.isInteger(n) || n < 1) {
    throw new Error("Debe proporcionar un número entero positivo");
  }
  if (n === 1) {
    return [0];
  }
  if (n === 2) {
    return [0, 1];
  }
  if (n > 2) {
    let arraySeriePrevia = fibonnacci(n - 1);
    arraySeriePrevia.push(arraySeriePrevia[n - 2] + arraySeriePrevia[n - 3]);
    return arraySeriePrevia;
  }
}
/*
Primero se valida que la entrada sea un número entero positivo. 
Dado que la serie de Fibonnaci para un N dado es igual a la serie de Fibonnaci para N-1 más el último número de la serie de Fibonnaci para N-2, lo resolvimos de forma recursiva.
Por ello si N es mayor a 2 se llama a la función fibonnacci con N-1 y se añade al array resultante el último número de la serie de Fibonnaci para N-2 más el último número de la serie de Fibonnaci para N-3 (es decir, se añade la suma de los dos números anteriores).
Para los casos base n=1 y n=2 se devuelve directamente el resultado (pues no se conforman del mismo modo, por lo que no se llama recursivamente a la función en esos casos).
*/
var enes = [1, 10, 50];
console.log(`
- - - - - - - - - - - - - - - - - - - - - - - - - - - 
7. Generar los primeros N números de la sucesión de Fibonacci
- - - - - - - - - - - - - - - - - - - - - - - - - - -

Primeros ${enes[0]} números de la sucesión de Fibonnacci: ${fibonnacci(enes[0])}
Primeros ${enes[1]} números de la sucesión de Fibonnacci: ${fibonnacci(enes[1])}
Primeros ${enes[2]} números de la sucesión de Fibonnacci: ${fibonnacci(enes[2])}


`);

/*---------------------------------------------------------------------------*/
