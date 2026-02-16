function calcular() {
    let inicio = Number(document.getElementById('inicio').value)
    let passo  = Number(document.getElementById('passo').value)
    let res    = document.getElementById('res')
    let numeros = []

    res.innerHTML = ''

    for (let c = inicio; numeros.length < 10; c += passo) {
        numeros.push(c)
    }

    res.innerHTML += numeros
}