function converter() {
    let num = Number(document.getElementById('txtnum').value)
    let res = document.getElementById('res')

    let valor = num/5.29

    res.innerHTML = `Você pode comprar ${valor.toLocaleString('en-US', {style: 'currency',currency: 'USD'})} em dólares`
}