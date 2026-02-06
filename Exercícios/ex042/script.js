function calcular(){
    let lado1 = Number(document.getElementById('lado1').value)
    let lado2 = Number(document.getElementById('lado2').value)
    let lado3 = Number(document.getElementById('lado3').value)
    let res = document.querySelector('p#res')

    if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
        let tipo = ''
        if (lado1 == lado2 && lado1 == lado3) {
            tipo = 'EQUILÁTERO'
        } else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
            tipo = 'ISÓSCELES'
        } else {
            tipo = 'ESCALENO'
        }

        res.innerHTML = `<p>Pode formar um triângulo do tipo ${tipo}</p>`
    } else {
        res.innerHTML = 'Não pode formar um triângulo'
    }
}