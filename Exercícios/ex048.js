let soma = 0

for (let c = 1; c <= 500; c += 2){
    if (c % 3 == 0) {
        soma += c
    }
}

console.log(soma)