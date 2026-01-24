function verificar() {
    let numero = Number(document.getElementById('txtnum').value)
    let res    = document.getElementById('res')

    res.innerHTML = `<p>O dobro de ${numero} é ${numero*2}</p>`
    res.innerHTML += `<p> O triplo de ${numero} é ${numero*3}</p>`
    res.innerHTML += `<p> a raiz quadrada de ${numero} é ${Math.sqrt(numero)}`
}