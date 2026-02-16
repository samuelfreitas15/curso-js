function calcular() {
    let num = Number(document.getElementById('num').value)
    let tab = document.getElementById('tab')
    
    for (let c = 1; c <= 10; c++){
        let item = document.createElement('option')
        item.innerHTML += `${num} x ${c} = ${num*c}`
        tab.appendChild(item)
    }

    num.value = ''
    num.focus()
}