function converter() {
    
    let tempC = Number(document.getElementById('txttemp').value)
    let res         = document.getElementById('res')
    
    let tempF = tempC * 9 / 5 + 32

    res.innerHTML = `A temperatura ${tempC}°C equivale à ${tempF}°F`
}