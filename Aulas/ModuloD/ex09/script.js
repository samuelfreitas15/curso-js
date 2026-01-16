var agora = new Date()
var hora = agora.getHours()
var horario = document.getElementById('hora')
var corpo = document.querySelector('body')
var img = document.getElementById('imagem')
horario.innerHTML = `<p>Agora são ${hora} horas.</p>`

if (hora > 6 && hora < 12) {
    corpo.style.background = 'lightsalmon'
    img.src = 'dia.jpg'
} else if (hora < 18 && hora > 12) {
    corpo.style.background = 'salmon'
    img.src = 'tarde.jpg'
} else {
    corpo.style.background = 'darkslategrey'
    img.src = 'noite.jpg'
}