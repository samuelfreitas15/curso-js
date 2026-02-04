function calcular(){
    let lado1 = Number(document.getElementById('lado1').value)
    let lado2 = Number(document.getElementById('lado2').value)
    let lado3 = Number(document.getElementById('lado3').value)
    let res = document.querySelector('p#res')

    if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
        res.innerHTML = 'Pode formar um triângulo'
    } else {
        res.innerHTML = 'Não pode formar um triângulo'
    }
}