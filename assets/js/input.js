function validarApenasLetras(event) {
    var input = event.key;

    if (!/[a-zA-Z]/.test(input)) {
      event.preventDefault();
    }
}