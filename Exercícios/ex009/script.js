function verificar() {
    let num    = document.getElementById('txtnum')
    let tab    = document.getElementById('tab')

    if (num.value.length == 0) {
        alert('Digite um número')
    } else {
        numero = Number(num.value)
        tab.innerHTML = ''

        for (let c=1; c<=10; c++) {
            let item = document.createElement('option')
            item.innerHTML += `${numero} x ${c} = ${numero*c}<br>`
            tab.appendChild(item)
        }
        
    }
    num.value = ''
    num.focus()
}