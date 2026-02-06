function calcular() {
    let preco = Number(document.getElementById('preco').value)
    let res = document.getElementById('res')
    let select = document.getElementById('opcoes')

    switch (select.value) {
        case '0':
            res.innerHTML = `O valor a pagar é ${preco * 0.9}`
            break

        case '1':
            res.innerHTML = `O valor a pagar é ${preco * 0.95}`
            break

        case '2':
            res.innerHTML = `O valor a pagar é ${preco} e cada parcela é ${preco / 2}`
            break

        case '3':
            res.innerHTML = `O valor a pagar é ${preco * 1.2} e cada parcela é ${preco * 1.2 / 3}`
            break
    
        default:
            res.innerHTML = `Opção inválida`
            break;
    }
}