function verificar(){
    let numero = Number(document.getElementById('numero').value)
    let res = document.getElementById('res')
    let numerosDivisiveis = []

    res.innerHTML = `<p>O número ${numero} é divisível por:</p>`
    
    for (let c = 1; c <= numero; c++){
        if (numero % c == 0){
            numerosDivisiveis.push(c)
            res.innerHTML += `<span style=\"text-decoration: underline;";\">${c} ,</span>`
        } else {
            res.innerHTML += `${c}, `
        }
    }

    if (numerosDivisiveis.length > 2){
        res.innerHTML += '<p>Portanto ele NÃO é primo</p>'
    } else {
        res.innerHTML += '<p>Portanto ele É primo</p>'
    }
}