let opMaq = Math.floor(Math.random() * 10 + 1)
let conta = 0
alert(opMaq)

function adivinhar(){
    let num = Number(document.getElementById('num').value)
    let res = document.getElementById('res')

    conta++

    if (num == opMaq) {
        res.innerHTML += `<p>Você acertou com ${conta} tentativas. Parabéns</p>`
    } else if (num < opMaq) {
        res.innerHTML += '<p>Mais... Tente mais uma vez.</p>'
    } else if (num > opMaq) {
        res.innerHTML += '<p>Menos... Tente mais uma vez.</p>'
    }
}