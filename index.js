// Ejercicio 1
console.log('Ejercicio 1');
var operacion1 = 'a' + 5 + -3;
console.log(operacion1);
var operacion2 = 6 + 3 + 'a';
console.log(operacion2);
var operacion3 = 2 + 'a' + 8 + 3;
console.log(operacion3);
var operacion4 = 2 + -10 + 'a' + 7;
console.log(operacion4);

//Si a lado de un string hay un entero o viceversa estos se concatenaran, en caso de que dos enteros esten a lado uno del otro se realizara la operacion

//Ejercicio 2
console.log('Ejercicio 2');
var names = ['alberto', 'jesus', 'pedro', 'pablo', 'hector', 'evelyn'];
console.log(names[0].toUpperCase());
console.log(names[1].toUpperCase());
console.log(names[2].toUpperCase());
console.log(names[3].toUpperCase());
console.log(names[4].toUpperCase());
console.log(names[5].toUpperCase());

//Ejercicio 3
console.log('Ejercicio 3');
var nombres = ['Alberto', 'Susana', 'Mariana'];
var apellido = ['Ortiz', 'Perez', 'Gonzalez'];
console.log(nombres[0] + ' ' + apellido[0]);
console.log(nombres[1] + ' ' + apellido[1]);
console.log(nombres[2] + ' ' + apellido[2]);

//Ejercicio 4
console.log('Ejercicio 4');
var oracion = 'La tierra es plana y nunca cuadrada';
console.log(oracion.replace(/a/g, 'x'));

//Ejercicio 5
console.log('Ejercicio 5');
var colors = ['Verde', 'Rojo', 'Azul'];
colors[0] = '1 - Verde';
colors[1] = '2 - Rojo';
colors[2] = '3 - Azul';
console.log(colors);

//Ejercicio 6
console.log('Ejercicio 6');
var articulo = {
  nombre: 'Pastel',
  precio: 345,
  sabor: 'chocolate',
  items: 25,
  sumaVenta: 690,
};

articulo.items = articulo.items - 3; //a
articulo.sumaVenta = articulo.sumaVenta + articulo.precio * 3; //a
console.log(articulo); //b

//Ejercicio 7
console.log('Ejercicio 7');
var array = [];
array.push('Febrero', 'Marzo', 'Abril');
console.log(array);
array.unshift('Enero');
console.log(array);

//Ejercicio 8
console.log('Ejercicio 8');
var statusB = true;
statusB = !statusB;
var statusA = statusB;
statusA; // false
console.log(statusA);

//Esto es debido a que en la primer linea (70) B es declarado como 'true', en la siguiente linea (71) B es negado y en la tercera linea (72) A es declarado con el valor de B ('false')
