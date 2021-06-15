let color = document.querySelector('#color');
let salida = document.querySelector('#salida');
let reset = document.querySelector('#reset');
let storage = localStorage.getItem("colorValue") || '#ffffff'; //Uso operador or porque si lo que trato de obtener es undefined o null, entonces aplico el otro valor predefinido
let colorCopiar = localStorage.getItem("colorValue") || '#ffffff';
let colorCopiado = []