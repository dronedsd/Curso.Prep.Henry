// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí

    /* Metodo directo!!!
    var array1 = Object.entries(objeto);
    return array1;
    */

    var array1 = [];
    var clave = Object.keys(objeto);
    var valor = Object.values(objeto);
    for (i=0; i< valor.length; i++){
      array1.push([clave[i],valor[i]])
    }
    return array1;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  /*
  var obj = {};
  for (i=0 ; i < (string.length - 1); i++){
          var letra = string[i];
          var cont = 0;

          for (j= i ; j < string.length - i ; j++ ){
            var b = string.slice(j)
            if (b[j] === letra){
              cont = cont + 1;
            }else  
            continue;
          }
           Object.defineProperty(obj, letra ,{ value : cont , writable: true, enumerable:true , configurable:true});
          
  }
return obj;
*/
  var letras = string.split('');
  var obj = {};
  
  letras.forEach(function(letra) {
    obj[letra] = (obj[letra] || 0 ) + 1;
  });
  return obj;


}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var min = [];
  var may = [];
  var letras = s.split('');
  for (i=0;i < s.length;i++){
    if (letras[i] === letras[i].toUpperCase() ){
      may.push(letras[i]);
    }else {min.push(letras[i])};
  }
  var news = may.join('') + min.join('');
  return news;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var espejo = [];
  var palabras = str.split(' ');
  for (i=0;i < palabras.length;i++){
    var invertida = '';
    var dim = palabras[i].length - 1;
    for( j = dim; j >= 0; j--){
      invertida = invertida + palabras[i].charAt(j);
    }
    espejo.push(invertida);
  }
  var salida = espejo.join(' ');
  return salida;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí

  var temp = numero.toString();
  var ivert = '';
  var dim = temp.length - 1;
  for (i = dim ; i >= 0 ; i--){
      ivert = ivert + temp.charAt(i);
    
  }
  if ( temp === ivert){
    return "Es capicua"
    }else {
    return "No es capicua"
    }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var respuesta = "";
  for (i=0; i < cadena.length; i++){
    if (cadena.charAt(i) === 'a' || cadena.charAt(i) === 'b' || cadena.charAt(i) === 'c'){
      continue;
    }else {respuesta = respuesta + cadena.slice(i,i+1)};
  }
  return respuesta;
}



function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  /* var ord = [];
  var dim = arr.length;
  for (i = 0; i < dim ; i++){
    var comp = arr[i]
    if (arr[i].length > arr[i+1].length && i <= dim -1){
      ord.push(arr[i]);
    }else {ord.unshift(arr[i])};
  }
  return ord;
  */
  arr.sort(function(a, b){return a.length - b.length});
  return arr;
  
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var union = [];
  for (i= 0 ; i < arreglo1.length; i++){
    for (j=0; j<arreglo2.length; j++){
      if (arreglo1[i] === arreglo2[j]){
        union.push(arreglo2[j]);
      }else continue;
    };

  }
  return union;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

