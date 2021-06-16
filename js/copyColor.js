let copyColor = () => {
    navigator.clipboard.writeText(colorCopiado);
    alert('Color ' + colorCopiado + ' copiado en el portapapeles.')
    //console.log('Color ' + colorCopiado + ' copiado en el portapapeles')
};