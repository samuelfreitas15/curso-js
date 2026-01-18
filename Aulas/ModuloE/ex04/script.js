function contar(){
    var inicio = Number(document.getElementById('txtinicio').value)
    var fim    = Number(document.getElementById('txtfim').value)
    var passo  = Number(document.querySelector('input#txtpasso').value)
    var result = document.getElementById('res')
    result.innerHTML = ''
    
    if (passo == 0) {
        alert('Valor do passo não pode ser 0. Estou considerando 1')
        passo = 1
    }
    
    for (var c = inicio; c <= fim; c += passo){
        //alert(`Inicio ${inicio}, fim ${fim}, passo ${passo}, c ${c}`)
        result.innerHTML += `${c} &#128073 `
    }
    
    result.innerHTML += ' &#127937'

}