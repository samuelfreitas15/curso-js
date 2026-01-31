function verificar() {
    let numero = document.getElementById('tnum').value
    let res    = document.getElementById('res')

    if (numero.length > 4 || numero.length == 0) {
        alert('Número inválido')
    } else {
        res.innerHTML = `
        <p>unidade: ${numero / 1 % 10}</p>
        <p>dezena: ${Number.parseInt((numero / 10 % 10))}</p>
        <p>centena: ${Number.parseInt((numero / 100 % 10))}</p>
        <p>milhar: ${Number.parseInt((numero / 1000 % 10))}</p>`
    }

}