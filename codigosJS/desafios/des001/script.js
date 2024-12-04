function carregar(params) {
// pegando os dados das divs
    var msg = window.document.getElementById('msg')
    var m = window.document.getElementById('mensg')
    var img = window.document.getElementById('imagem')
    
// pegando a hora do sistema
    
    var data = new Date()
    var hora = 18 //data.getHours()
     
// mostrar a hora na tela

msg.innerHTML = `Agora são ${hora} horas.`  
// condição para mostrar a foto de acordo com a hora 

if (hora >= 0 && hora < 12 ) {
    //Bom Dia
    img.src = "image/manha.png"
    m.innerHTML = '<strong>Bom Dia!</strong>'
    document.body.style.background = "#d1aa63"    
       
} else if (hora >= 12 && hora < 18) {
    img.src = "image/tarde.png"
    m.innerHTML = '<strong>Boa Tarde!</strong>'
    document.body.style.background = '#6a7c94'
} else {
    img.src = 'image/noite.png'
    m.innerHTML = '<strong>Boa Noite!</strong>'
    document.body.style.background = "#382a44"
} 
}

