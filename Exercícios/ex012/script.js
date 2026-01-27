function calcular() {
    let preco = Number(document.getElementById('tpreco').value)
    let res = document.getElementById('res')

    res.innerHTML = `O preço digitado foi R$${preco.toFixed(2)}, e com o desconto de 5% o novo valor é R$${(preco * 0.95).toFixed(2)}`
}