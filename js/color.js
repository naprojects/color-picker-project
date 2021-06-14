const color = document.querySelector('#color');
const salida = document.querySelector('#salida');
const reset = document.querySelector('#reset');

color.addEventListener('input', () => {
    const value = color.value;
    
    salida.innerHTML = value;
    salida.style.background = value;
    salida.style.color = '#fff';
});

reset.addEventListener('click', () => {
    color.value = '#ffffff'
    salida.style.background = '#ffffff';
    salida.style.color = '#000';
    salida.innerHTML = '#ffffff';
})

