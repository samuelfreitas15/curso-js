function verificar() {
    let numero = Number(document.getElementById('tnum').value)
    let res = document.getElementById('res')

    if (numero%2 == 0) {
        res.innerHTML = 'Par'
    } else {
        res.innerHTML = 'Impar'
    }
}