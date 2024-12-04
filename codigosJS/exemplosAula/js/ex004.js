var agora = new Date()
var hora = agora.getHours()
console.log(`São exatamente ${hora} horas` )

if (hora < 6) {
    console.log('BOA MADRUGADA!')
} else if (hora < 12) {
    console.log('BOM DIA!')    
} else if (hora < 18) {
    console.log('BOA TARDE!')
} else if (hora < 24) {
    console.log('BOA NOITE!')
}
