function verificar() {
    let num1 = Number(document.getElementById('tnum1').value)
    let num2 = Number(document.getElementById('tnum2').value)
    let res = document.getElementById('res')

    let media = (num1 + num2) / 2

    if (media < 5) {
        res.innerHTML = 'REPROVADO'
    } else if (media < 7) {
        res.innerHTML = 'RECUPERAÇÃO'
    } else {
        res.innerHTML = 'APROVADO'
    }
}