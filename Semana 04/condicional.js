let numero = parseInt(window.prompt('Digite um número'));
function verificaNumero(a) {
    if (a > 0) {
        alert('O número é postivo.')
    } else if (a < 0) {
        alert('O número é negativo.')
    } else {
        alert('O número é zero.')
    }
}
verificaNumero(numero);