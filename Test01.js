// Exemplo de If e Else
// let idade
// let genero
// idade = 12
// genero = 'M'
// if(idade >= 18 && genero == 'M'){
//     console.log("Se alista infeliz")
// }
// else{
//     console.log("Infelizmente você não pode ser torturado :(")
// }

// Os "&&" são usados para acrescentar algo no "If" ou no "Else"
// let idade
// let teleitor
// idade = 18
// teleitor = true
//     if(idade>= 16 && teleitor == true){
//         console.log("Pode votar!")
//     }
//     else{
//         console.log("Não pode votar, seu infeliz")
//     }

// let num
// num = 10
//     console.log("Adivinhe o número de 1 a 50!")
//     if(num === 10){
//         console.log("Parabéns você acertou!!!")
//     }
//     else{
//         console.log("Digite outro número!")
//     }

// let num
// num1 = 24
// num2 = 9
// console.log("Digite dois números!")
//     if(num1 > num2){
//         console.log(num1 + " é maior que " + num2 + '!')
//     }
//     else{
//         console.log(num2 + ' é maior que ' + num1 + "!")
//     }

let usuario, senha
    function verificaLogin(){
        usuario = document.getElementById('login').value
        senha = document.getElementById('senha').value
            if(usuario === 'amem' && senha === 'jesus123'){
                alert("Login efetuado")
            }
            else{
                alert("Usuário ou senha incorretos")
            }
    }