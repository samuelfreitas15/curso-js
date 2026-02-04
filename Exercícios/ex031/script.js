function calcular() {
    let distancia = Number(document.getElementById('tdistancia').value)
    let preco = document.getElementById('preco')

    if (distancia <= 200) {
        preco.innerHTML = `O preço da passagem é R$${distancia * .5},00`
    } else {
        preco.innerHTML = `O preço da passagem é R$${distancia * .45},00`
    }
}