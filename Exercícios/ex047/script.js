function contar() {
    let num = Number(document.getElementById('num').value)
    let res = document.getElementById('res')

    res.innerHTML = ''

    if (num >= 2) {
        res.innerHTML = '2'
        for (let c = 4; c <= num; c += 2){
            res.innerHTML += `, ${c}`
        }
    }
}