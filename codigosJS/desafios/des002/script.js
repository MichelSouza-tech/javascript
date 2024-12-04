function clicar() {
    // pegar o ano atual do sistema
    var data = new Date()
    var ano = data.getFullYear()
    // obter o valor digitado pelo usuário
    var fano = window.document.getElementById('txtnasc')
    var resp = window.document.querySelector('div#resp')  
     // Validar o ano de Nascimento  
    if (fano.value.length == 0 || Number(fano.value > ano)) {
        alert('[ERROR] Por favor, entre com uma data válida!')
    } else {
        var fsex = window.document.getElementsByName('radsex')
        // calcular a idade
        var idade = ano - Number(fano.value)
        // criar uma variável gênero que vai começar vazia
        var genero = ''
        
        /* criando uma imagem dinamicamente */
        var img = document.createElement('img') // criar uma tag img
         
        img.setAttribute('id', 'foto') // atribuir um id        
        if (fsex[0].checked) { // se gênero masculino foi marcado
            genero = 'Homem'
        if (idade >= 0 && idade < 10) { // foto de acordo com a idade MASCULINO
            // criança
            img.setAttribute('src', 'img/foto-crianca-m.png') 
        } else if(idade > 10 && idade < 21) {
            // jovem
            img.setAttribute('src', 'img/foto-jovem-m.png')
        } else if (idade >= 21 && idade < 50) {
            // adulto
            img.setAttribute('src', 'img/foto-adulto-m.png')
        } else {
            // idoso
            img.setAttribute('src', 'img/foto-idoso-m.png')
        }
        // se genêro feminino foi marcado

        } else if (fsex[1].checked) {
            genero = 'Mulher'
            // foto de acordo com a idade FEMININO
        if (idade >= 0 && idade < 10) {
            // criança
            img.setAttribute('src', 'img/foto-crianca-f.png')
        } else if(idade > 10 && idade < 21) {
            // jovem
            img.setAttribute('src', 'img/foto-jovem-f.png')
        } else if (idade >= 21 && idade < 50) {
            //adulto
            img.setAttribute('src', 'img/foto-adulto-f.png')
        } else {
            // idoso
            img.setAttribute('src', 'img/foto-idoso-f.png')
        } 
        }
        resp.style.textAlign = 'center'
        resp.innerHTML = `Detectamos: ${genero} de ${idade} anos.`
        resp.appendChild(img)
    } 
}qq
