function calcular(){
    let num = Number(document.getElementById('num').value)
    let res = document.getElementById('res')

    let anterior = 0
    let proximo = 1
    let sequencia = 0

    if (num == 1) {
        res.innerHTML = '0'
    } else if (num == 2) {
        res.innerHTML = '0 -> 1'
    } else if(num > 2) {
        res.innerHTML = '0 -> 1 -> '
        for (let c = 3; c <= num; c++) {
            sequencia = proximo + anterior
            anterior = proximo
            proximo = sequencia

            res.innerHTML += `${sequencia} -> `
        }
        res.innerHTML += 'FIM'
    }
}