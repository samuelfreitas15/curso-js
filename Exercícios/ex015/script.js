function calcular() {
    let dias = Number(document.getElementById('tdias').value)
    let km   = Number(document.getElementById('tkm').value)
    let res  = document.getElementById('res')

    let total = dias * 60 + km * 0.15

    res.innerHTML = `<p>Total a paga de RS${total.toFixed(2)}`
}