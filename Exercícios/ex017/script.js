function calcular() {
    let catop = Number(document.getElementById('tcatop').value)
    let catad = Number(document.getElementById('tcatad').value)
    let res   = document.getElementById('res') 
    
    let hipot = Math.sqrt(catop ** 2 + catad ** 2)

    res.innerHTML = `A hipotenusa é ${hipot.toFixed(2)}`
}