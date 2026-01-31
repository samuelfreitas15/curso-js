function verificar() {
    let numero = document.getElementById('tnum').value
    let res    = document.getElementById('res')

    if (numero.length == 1) {
        numero = '0' + '0' + '0' + numero
    } else if (numero.length == 2) {
        numero = '0' + '0' + numero
    } else if (numero.length == 3) {
        numero = '0' + numero
    } else if (numero.length > 4) {
        alert('Número inválido')
    } else if (numero.length == 0) {
        alert('Digite um número')
    }

    res.innerHTML = `
    <p>unidade: ${numero[3]}</p>
    <p>dezena: ${numero[2]}</p>
    <p>centena: ${numero[1]}</p>
    <p>milhar: ${numero[0]}</p>`
}