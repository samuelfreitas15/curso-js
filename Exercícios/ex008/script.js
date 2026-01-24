function converter() {
    let numero = Number(document.getElementById('txtnum').value)
    let res = document.getElementById('res')

    res.innerHTML = `<p>A distância digitada foi ${numero}m</p>`
    res.innerHTML += `<p>${numero/1000}km</p>`
    res.innerHTML += `<p>${numero/100}hm</p>`
    res.innerHTML += `<p>${numero/10}dam</p>`
    res.innerHTML += `<p>${numero*10}dm</p>`
    res.innerHTML += `<p>${numero*100}cm</p>`
    res.innerHTML += `<p>${numero*1000}mm</p>`
}