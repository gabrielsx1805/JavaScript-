var agora = new Date()
var hora = agora.getHours()
console.log(`agora sao exatamente ${hora} horas`)
if(hora < 12){
    console.log(`Bom dia`)} 
else if(hora <= 18){
    console.log(`Boa Tarde`)} 
else if(hora >= 18){ 
    console.log(`Boa Noite`)
}

