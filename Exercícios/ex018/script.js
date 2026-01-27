function calcular() {
    let anguloGraus = Number(document.getElementById('tangulo').value)
    let res = document.getElementById('res')

    let anguloRad = anguloGraus * (Math.PI / 180)

    let seno = Math.sin(anguloRad)
    let cose = Math.cos(anguloRad)
    let tang = Math.tan(anguloRad)

    res.innerHTML = `<p>O valor de seno é ${seno.toFixed(3)}, o cosseno é ${cose.toFixed(3)} e a tangente é ${tang.toFixed(3)} </p>`
}