const ang1 = 60
const ang2 = 60
const ang3 = 60

if (ang1 < 0 || ang2 < 0 || ang3 < 0){ 
    console.log('Valor Invalido')
}else if (ang1 + ang2 + ang3 === 180) {
    console.log('True')
} else {
    console.log('False')
}
