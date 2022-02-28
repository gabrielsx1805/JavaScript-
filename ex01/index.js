var amigo = {nome:'jose',
sexo: 'M',
peso: 85.4,
engordar(p=0){
console.log('engordou')
this.peso += p
}}
amigo.engordar(0)
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)
console.log(`${amigo.nome} e do sexo ${amigo.sexo}`)