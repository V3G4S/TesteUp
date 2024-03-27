// Exemplo com mais de uma verdadeira e falsa:
// let idade
// idade=
// if(idade<18){
//     console.log("Xovem!")
// }
// else if(idade >= 18 && idade <60){
//     console.log("Adulto!")
// }
// else{
//     console.log("Terceira idade!")
// }

let nota1, nota2, nota3, media
alert('Digite a seguir suas notas para cada trimestre (máximo 10)')
nota1 = Number(prompt('Digite sua primeira nota'))
nota2 = Number(prompt('Agora sua segunda'))
nota3 = Number(prompt('E por último, a terceira'))
media= (nota1 + nota2 + nota3) / 3
if(media >= 7){
    alert("Parabéns! Você passou!")
}
else if(media < 7 && media >= 3)
    alert("Recuperação! Por pouco em!")
else{
    alert("Sentimos informar que você não passou! Mais sorte na próxima!")
}