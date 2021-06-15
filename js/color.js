color.value = storage;
setColor();
color.addEventListener('input', setColor);
reset.addEventListener('click', setReset);
reset.addEventListener('click', () => saveColor(color.value));
color.addEventListener('change', () => saveColor(color.value));
salida.addEventListener('click', copyColor);