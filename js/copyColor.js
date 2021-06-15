let copyColor = () => {
    colorCopiado.splice(0, 1, colorCopiar)
    navigator.clipboard.writeText(colorCopiado);
    alert('Color ' + colorCopiado + ' copiado.')
}