
// EJERCICIOS DE MUMUKI 

//    1)- Utilizando reduce, queremos calcular la suma de todos los números 
// de un array.
//  Por ejemplo: Si tenemos [1, 2, 3], la suma de todos los números es 6.


// const sumatoria = [6, 1, 34, 94, 3, 17]

// const resultado = sumatoria.reduce((acc, elemento) => {
//   return acc + elemento
// }, 0)




// console.log(resultado)


//    2)- Similar al ejercicio anterior utilizando reduce, queremos calcular la productoria,
// es decir, la multiplicación, entre todos los números que están en un array.

// const productoria = [6, 1, 34, 94, 3, 17]

// const resultado = productoria.reduce((acc, elemento) => {
//     return acc * elemento

// }, )

// console.log(resultado)
// 977976
 


//    3)- Luchi es docente y nos pidió una función que le permita calcular el 
// promedio de notas de los trabajos prácticos de sus estudiantes.

// const promedio = [4, 7, 8, 5, 10]


// const resultado = promedio.reduce((acc, elemento) => {
//     return acc + (elemento / promedio.length)
// }, 0)

// console.log(resultado)
  //   6.8





//   4)-  Necesitamos una función que utilizando reduce, nos ayude a enlistar los libros que 
// tome por parámetro y retorne un string con todos los titulos de los libros encerrados
// en una etiqueta <li></li>. Por ejemplo:

//    let librosDeJS = [
//     'JavaScript for Kids: A Playful Introduction to Programming',
//     'Composing Software',
//     'Eloquent JavaScript: A Modern Introduction to Programming',
//     'JavaScript: The Good Parts',
//     'Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries',
//     'Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript',
//     'JavaScript: The Definitive Guide',
//     'You Don’t Know JS',
//     'JavaScript Allongé: The Six Edition'
//   ];
  

// const lista = librosDeJS.reduce((acc, elemento) => {
//     return acc + `<li> ${elemento} </li>`

// }, "")

// console.log(lista)

//    enlistar(librosDeJS);
//   "<li>JavaScript for Kids: A Playful Introduction to Programming</li><li>Composing Software</li><li>Eloquent
//    JavaScript: A Modern Introduction to Programming</li><li>JavaScript: The Good Parts</li><li>Programming 
//    JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries</li><li>Effective
//    JavaScript: 68 Specific Ways to Harness the Power of JavaScript</li><li>JavaScript: The Definitive 
//   Guide</li><li>You Don’t Know JS</li><li>JavaScript Allongé: The Six Edition</li>"





// 5)-    Queremos calcular la suma de todas las edades que están en una lista de personas. Por ejemplo:

// let personas = [
//     {
//       nombre: "Grace", 
//       edad: 6
//     }, 
//     {
//       nombre: "Ada", 
//       edad: 19
//     },
//     {
//       nombre: "Hedy", 
//       edad: 34
//     }
//   ];


//   const edadTotal = personas.reduce((acc, elemento)=>{
//       return acc + elemento.edad

//   }, 0)

// console.log(edadTotal)
//  sumaDeEdades(personas);
// 59




// 6)-   Necesitamos una función que nos permita eliminar todos los números 
// negativos y con los números restantes, obtener el doble de cada uno. 
// Finalmente, queremos obtener la suma de todos los números que obtuvimos.

const numeros = [2, -4, 6, 0, 5, -1]

// eliminas todos los negativos
//numeros restantes sumarlos y multiplicarlos por dos 


// const numerosNegativos = numeros.filter((elemento,index,array) => {
//     return elemento >= 0
// })
 
// console.log(numerosNegativos)

// const resultado = numerosNegativos.reduce((acc, elemento) => {
// return acc + elemento * 2
// }, 0)

// console.log(resultado)
//  sumaDeLosDoblesPositivos([2, -4, 6, 0, 5, -1]);
26
// Definí la función sumaDeLosDoblesPositivos y las funciones auxiliares
//  necesarias para lograr el comportamiento que acabamos de describir.


