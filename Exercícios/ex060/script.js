function calcular() {
    let num = Number(document.getElementById('num').value)
    let res = document.getElementById('res')
    let fat = 1

    res.innerHTML = `${num}! = `

    if (num != 0){
        for (let c = num; c > 0; c--) {
            fat *= c
            if (c > 1) {
                res.innerHTML += `${c} x `
            } else {
                res.innerHTML += `${c} = `
            }
        }
    }

    res.innerHTML += `${fat}`
}