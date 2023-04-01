const questions = [...document.querySelectorAll('.qnaContainer')]
console.log(questions)
const result = document.querySelector('.result')

let index = 0
let score = 0

const choiceBtns = [...document.querySelectorAll('.choice')]
choiceBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        const currQues = questions[index]
        currQues.removeAttribute('data-active')

        console.log(questions[index].getAttribute('data-ans')) // one way of selecting the attribute
        console.log(btn.innerText)

        if(btn.innerText == questions[index].dataset.ans) { // other way of selecting the attribute
            score++;
        }

        index++
        if(index >= questions.length) {
            showScore()
            return
        }

        const nextQues = questions[index]
        nextQues.setAttribute('data-active','')
    })
})


function showScore() {
    result.innerText = `Your score is : ${score}`
    console.log(score)
}

const reset = document.querySelector('.reset')
reset.addEventListener('click', () => {
    if(index < questions.length) {
        questions[index].removeAttribute('data-active')
    }
    questions[0].setAttribute('data-active','')
    index = 0
    score = 0
})
