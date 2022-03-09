let maiorNumeroPrimo = 0;

for (let i = 49; i >= 0; i -= 2) {

    let divisiveis = 2;

    for (let n = 2; n < 10; n++) {

        if (i % n <= 0) {

            divisiveis++;

        }
    }

    if (divisiveis === 2 && i > maiorNumeroPrimo) {

        maiorNumeroPrimo = i;

    }
}

console.log(maiorNumeroPrimo);