let saveColor = (value) => {
    localStorage.setItem('colorValue', value); //Almaceno color en el localStorage
    colorCopiado.splice(0, 1, localStorage.getItem('colorValue')) //Almaceno color en el Array
};