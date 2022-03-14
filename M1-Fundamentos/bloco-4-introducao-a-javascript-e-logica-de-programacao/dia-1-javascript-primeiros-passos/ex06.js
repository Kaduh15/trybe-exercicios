const peca = 'peao'

switch (peca.toLowerCase()) {
    case 'bispo':
        console.log(`${peca} -> diagonais`)
        break
    case 'peao':
        console.log(`${peca} -> para frente`)
        break
    case 'cavalo':
        console.log(`${peca} -> em L`)
        break
    case 'torre':
        console.log(`${peca} -> horizontal e vertical`)
        break
    case 'rei':
        console.log(`${peca} -> uma casa para qualquer lado`)
        break
    case 'rainha':
        console.log(`${peca} -> vertical, horizontal e na diagonais`)
    default:
        console.log(`Peça Invalida`)
}
