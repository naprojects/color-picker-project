let color = document.querySelector('#color');
let salida = document.querySelector('#salida');
let iconoSalida = document.querySelector('#icono-salida');
let reset = document.querySelector('#reset');
let storage = localStorage.getItem('colorValue') || '#ffffff'; //Uso operador or porque si lo que trato de obtener es undefined o null, entonces aplico el blanco como valor predefinido.
let colorCopiado = [storage]; //Por defecto agrego storage para que cuando vuelva a ingresar pueda tomar el último valor que usé antes de cerrarlo.