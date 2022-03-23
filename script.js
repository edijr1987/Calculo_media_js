//calculando a média de notas e de frequência de um aluno para passar de ano na escola

var nota1 = parseInt(prompt('Digite a primeira nota: '));
var nota2 = parseInt(prompt('Digite a segunda nota: '));
var nota3 = parseInt(prompt('Digite a terceira nota: '));
var nota4 = parseInt(prompt('Digite a quarta nota: '));

var media = (nota1 + nota2 + nota3 + nota4) / 4

let frequencia1 = parseInt(prompt('Digite o percentual de frequências 1:'))
let frequencia2 = parseInt(prompt('Digite o percentual de frequências 2:'))
let frequencia3 = parseInt(prompt('Digite o percentual de frequências 3:'))
let frequencia4 = parseInt(prompt('Digite o percentual de frequências 4:'))

let presenca = (frequencia1 + frequencia2 + frequencia3 + frequencia4) / 4

if (media == 10) {
    alert('Wow que aluno gênio!!!' + ` Sua média final foi ${media} =)`)
} if (media >= 7 && media < 9.9) {
    alert('Parabéns, aluno aprovado por média!' + ` Sua média final foi de ${media} =)`)
} else {
    alert('Infelizmente o aluno foi reprovado por média!' + ` Sua média final foi de ${media} =(`)
}

if (presenca >= 7) {
    alert('O aluno aprovado por frequência' + ` ${presenca} ` + '=)')
} else {
    alert('O aluno foi reprovado por frequência' + ` ${presenca} ` + '=(')
}
