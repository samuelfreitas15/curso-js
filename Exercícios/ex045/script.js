let opcoes = 0
let opJogador = document.createElement('img')
let opMaquina = document.createElement('img')
/*
1 = Pedra
2 = Papel
3 = Tesoura
*/

function pedra() {
    let pedra = document.getElementById('op_pedra')
    let papel = document.getElementById('op_papel')
    let tesoura = document.getElementById('op_tesoura')
    opcoes = 1
    pedra.style.transform = 'scale(1.2)'
    papel.style.transform = 'scale(1)'
    tesoura.style.transform = 'scale(1)'
}

function papel() {
    let pedra = document.getElementById('op_pedra')
    let papel = document.getElementById('op_papel')
    let tesoura = document.getElementById('op_tesoura')
    opcoes = 2
    pedra.style.transform = 'scale(1)'
    papel.style.transform = 'scale(1.2)'
    tesoura.style.transform = 'scale(1)' 
}

function tesoura() {
    let pedra = document.getElementById('op_pedra')
    let papel = document.getElementById('op_papel')
    let tesoura = document.getElementById('op_tesoura')
    opcoes = 3
    pedra.style.transform = 'scale(1)'
    papel.style.transform = 'scale(1)'
    tesoura.style.transform = 'scale(1.2)' 
}

function jogar() {
    let res = document.getElementById('resultado')
    let ganhador = document.getElementById('ganhador')
    let reiniciar = document.getElementById('reiniciar')
    let resultado = 0 // 0 = Perdeu / 1 = Ganhou / 2 = Empate / 3 = ERRO

    let opcaoMaquina = Math.floor(Math.random() * 3 + 1)

    //Muda a imagem de acordo com a escolha do jogador
    if (opcoes == 1){
        opJogador.setAttribute('src', 'imagens/pedra.png')
    } else if (opcoes == 2) {
        opJogador.setAttribute('src', 'imagens/papel.png')
    } else {
        opJogador.setAttribute('src', 'imagens/tesoura.png')
    }

    //Muda a imagem de acordo com a escolha da máquina
    if (opcaoMaquina == 1){
        opMaquina.setAttribute('src', 'imagens/pedra.png')
    } else if (opcaoMaquina == 2) {
        opMaquina.setAttribute('src', 'imagens/papel.png')
    } else {
        opMaquina.setAttribute('src', 'imagens/tesoura.png')
    }

    //Verifica quem ganhou no jogo
    if (opcoes == opcaoMaquina){
        resultado = 2
    } else if (opcoes == 1 && opcaoMaquina == 3 || opcoes == 2 && opcaoMaquina == 1 || opcoes == 3 && opcaoMaquina == 2){
        resultado = 1
    } else if (opcoes == 1 && opcaoMaquina == 2 || opcoes == 2 && opcaoMaquina == 3 || opcoes == 3 && opcaoMaquina == 1) {
        resultado = 0
    } else {
        resultado = 3
    }

    res.appendChild(opJogador)
    res.appendChild(opMaquina) 
    setTimeout(function() {
        opJogador.style.transform = 'translateX(70%)'
        opMaquina.style.transform = 'translateX(-70%)'
    }, 1000)
    setTimeout(function(){
        if (resultado == 0) {
            ganhador.innerHTML = 'Que pena. Você perdeu'
        } else if (resultado == 1) {
            ganhador.innerHTML = 'PARABÉNS. Você ganhou!!!'
        } else if (resultado == 2) {
            ganhador.innerHTML = 'Foi um EMPATE'
        } else {
            ganhador.innerHTML = 'ERRO'
        }
        reiniciar.style.display = 'block'
    }, 2000)
}

function reiniciar() {
    location.reload()
}
