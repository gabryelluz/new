alert('bem vindo pessoal');

let nome_usuario = '';

let texto = document.querySelector('span')

    while(nome_usuario == '') {
        nome_usuario =  prompt("qual o seu nome?");
    }
if (nome_usuario == null){
    texto.textContent = "usuário";
} else{
    texto.textContent = nome_usuario;
}

console.log("NOME DO USUÁRIO = " + nome_usuario);