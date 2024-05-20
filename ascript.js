let question_field = document.querySelector('.question')
let answer_buttons = document.querySelectorAll('.answer') // Змінено на answer_buttons
let signs = ["+", "-", "*", "/"]
let score = document.querySelector('.score')
let isCookies = false // Виправлено ім'я змінної на isCookies
let max_points 
let cookies = document.cookie.split(';')
for (let i=0; i<cookies.length; i+=1){
    let name_value = cookies[i].split('=')
    if (name_value[0].includes('max-score')){ // Виправлено max-points на 'max-score'
        isCookies = true
        max_points = name_value[1]
        score.textContent = `Ваш максимальний бал = ${max_points}` // Змінено на textContent

    }
}


function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    while (currentIndex != 0) { 
      randomIndex = Math.floor(Math.random() * currentIndex); 
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [    
        array[randomIndex], array[currentIndex]];
    }
    return array; 
}
  
my_array = [1, 2, 3, 4, 5] 
shuffle(my_array)  


function randint(min, max){
    return Math.round(Math.random() * (max - min) + min)
}

function getRandomSign(){
    let i =  randint(0,3)
    return signs[i]
}

class Question{
    constructor(){
        let a = randint(1, 40)
        let b = randint(1, 40)
        let sign = getRandomSign()
        this.question = `${a} ${sign} ${b}`
        if (sign == "+"){
            this.correct = a + b
        } else if (sign == "-"){
            this.correct = a - b
        } else if (sign == '*'){
            this.correct = a * b
        } else if (sign == '/'){
            let answer = a/b *100
            this.correct = Math.round(answer) /100
        }
            

        this.answers = [
            this.correct,

                randint(this.correct - 14, this.correct - 7),
                randint(this.correct + 1, this.correct + 7),
                randint(this.correct - 15, this.correct - 7),
                randint(this.correct - 7, this.correct - 1),

        ]
        shuffle(this.answers)
        console.log(this)
    }
    display(){
        question_field.textContent = this.question // Змінено на textContent
        for (let i = 0; i < this.answers.length; i+=1){
            answer_buttons[i].textContent = this.answers[i] // Змінено на textContent
        }
    }
}



let current_question = new Question()  
current_question.display()

let points = 0
let total_question_count = 0

score.textContent = `Ваш бал: ${points}`

for (let i = 0; i< answer_buttons.length; i+=1){
    answer_buttons[i].addEventListener('click', function(){
        total_question_count +=1
        if (answer_buttons[i].textContent == current_question.correct){ // Змінено на textContent
            console.log("Ви правильно відповіли!")
            points += 1 // Змінено на points += 1
            score.textContent = `Ваш бал: ${points}` // Оновлення відображення балу
        } else{
            console.log('Ви програли')
        }
    })
}


finish.addEventListener('click', function(){
    current_question = new Question()  
    current_question.display()
})


    current_question = new Question()  
    current_question.display()