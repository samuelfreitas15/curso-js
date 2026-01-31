function calcular() {
    let velocidade = Number(document.getElementById('tvel').value)
    let res = document.getElementById('res')

    if (velocidade <= 80){
        res.innerHTML = 'Tenha uma boa viagem'
    } else {
        res.innerHTML = `Você estava à ${velocidade}km/h. Sua multa é de R$${(velocidade - 80) * 7},00`
    }
}