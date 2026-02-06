function calcular() {
    let peso   = Number(document.getElementById('peso').value)
    let altura = Number(document.getElementById('altura').value)
    let res    = document.getElementById('res')

    let imc = peso / (altura * altura)
    let aviso = ''
    let estado = ''

    if (imc < 18.5) {
        aviso = 'ATENÇÃO, '
        estado = 'ABAIXO DO PESO'
    } else if (imc < 25) {
        aviso = 'PARABÉNS, '
        estado = 'no PESO IDEAL'
    } else if (imc < 30) {
        aviso = ''
        estado = 'em SOBREPESO'
    } else if (imc < 40) {
        aviso = 'ATENÇÃO, '
        estado = 'em OBESIDADE'
    } else {
        aviso = 'CUIDADO!!!, '
        estado = 'em OBESIDADE MÓRBIDA'
    }

    let pesoMinimo = altura * altura * 18.5
    let pesoMaximo = altura * altura * 25

    res.innerHTML = `
    <p>Seu IMC é de ${imc.toFixed(2)}</p>
    <p>${aviso}você está ${estado}</p>
    <p>Seu peso ideal é entre ${pesoMinimo.toFixed(2)} e ${pesoMaximo.toFixed(2)}.</p>`
}