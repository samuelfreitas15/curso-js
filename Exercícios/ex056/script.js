listaNome  = []
listaIdade = []
listaSexo  = []
cont = 1
nPessoas = 4

function adicionar(){
    let nome   = document.getElementById('nome')
    let idade  = document.getElementById('idade')
    let sexo   = document.getElementsByName('sexo')
    let pessoa = document.getElementById('pessoa')
    let btAdd  = document.getElementById('btAdd')
    let res = document.getElementById('res')

    if (nome.value.length == 0 || idade.value.length == 0) {
        alert('Digite corretamente os dados solicitados')
    } else {
        listaNome.push(nome.value)
        listaIdade.push(Number(idade.value))
        if (sexo[0].checked){
            listaSexo[cont-1] = 'Masculino'
        }else{
            listaSexo[cont-1] = 'Feminino'
        }

        if (listaNome.length == nPessoas-1) {
            btAdd.value = 'Avaliar'
        }

        if (listaNome.length == nPessoas) {
            //Média das idades
            let somaIdades = 0
            for (let c in listaIdade){
                somaIdades += listaIdade[c]
            }
            let mediaIdade = somaIdades / listaIdade.length

            //Home mais velho
            let nomeVelho = ''
            for (let d in listaIdade){
                if(listaSexo[d] == 'Masculino'){
                    if (nomeVelho == '') {
                        nomeVelho = d
                    }else{
                        if (listaIdade[d] > listaIdade[nomeVelho]){
                            nomeVelho = d
                        }
                    }
                }
            }

            //Mulheres com menos de 20
            let menorVinte = 0
            for (let e in listaIdade){
                if(listaSexo[e] == 'Feminino'){
                    if (listaIdade[e] < 20) {
                        menorVinte++
                    }
                }
            }

            res.innerHTML = `
            <p>A média das idades é ${mediaIdade}</p>
            <p>O homem mais velho é ${listaNome[nomeVelho]}</p>
            <p>Ao todos tem ${menorVinte} mulher com menos de 20 anos</p>`
        } else {
            cont++
            pessoa.innerHTML = `Dados da ${cont}ª pessoa:`
        }

        nome.value = ''
        idade.value = ''
        idade.focus()
        nome.focus()
    }
}