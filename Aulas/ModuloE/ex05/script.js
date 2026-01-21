function calcular() {
    let num = document.getElementById('txtnumero')
    let tab = document.getElementById('restab')
    
    if (num.value.length == 0) {
        alert('Digite um número válido')
    } else {
        let n = Number(num.value)
        tab.innerHTML = ''
        let c = 1
        while (c <= 10) {
            let item = document.createElement('option')
            item.innerHTML += `${n} x ${c} = ${n*c}`
            item.value = `valor${c}`
            tab.appendChild(item)
            c++            
        }
    }
}