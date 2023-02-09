const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const imgBtn = document.querySelector('.imgBtn')
const opnCookie = document.querySelector('.openCookie')
let phrase = ''


imgBtn.addEventListener('click', phrasesGenerator)
opnCookie.addEventListener('click', toggleScreen)

let phrases = [
    "Se nada der certo hoje, acorde mais cedo amanhã e tente novamente.",
    "A superação da dificuldade depende apenas de você.",
    "Você não chegou até aqui por acaso, para tudo existe uma razão. ",
    "Não tenha medo de crescer devagar, tenha medo somente de ficar parado.",
    "Acredite em você, nos seus sonhos e nas suas ideias. ",
    "É essencial para a nossa evolução reconhecer quem somos.",
    "Não ache que vai acordar resistente todos os dias, o cansaço também faz parte.",
    "Não utilize a régua de outro, para medir a sua evolução.",
    "Em meio a várias personalidades padrão, ser você mesmo é um ato de ousadia.",
    "Quando você se acostuma a confiar em si mesmo, as coisas começam a dar certo.",
]

function phrasesGenerator(e){
    toggleScreen()

    let randomNumber = Math.round(Math.random() * phrases.length)
    phrase = phrases[randomNumber]
    document.querySelector(".screen2 p").innerText = `${phrase}`
    return(phrase)
}

function toggleScreen(){
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}