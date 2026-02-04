function verificar() {
    let num1 = Number(document.getElementById('tnum1').value)
    let num2 = Number(document.getElementById('tnum2').value)
    let res = document.getElementById('res')

    if (num1 > num2){
        res.innerHTML = 'O primeiro valor é maior'
    } else if (num2 > num1) {
        res.innerHTML = 'O segundo valor é maior'
    } else {
        res.innerHTML = 'Os dois valores são iguais'
    }
}