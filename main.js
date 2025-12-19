
let turn = 0
let num = 0
let score = 0
const btn = document.querySelector('button')
const h3 = document.querySelector('.box>h3')
const li = document.querySelectorAll('ul>li')
const _id  =document.querySelector('.box>h3>b')
const box = document.querySelector('.box')

const data = [
    {
        id:1, 
        question:'which word is a syn of PROGNASTICATE?',
        answers : {
            ans1 : 'predict',
            ans2 : 'delinquent',
            ans3 : 'secretive'
        },
        number : 0
    },
   
    {
        id:2,
        question:'which word is a syn of VIGILANT?',
        answers : {
            ans1 : 'adroit',
            ans2 : 'observant',
            ans3 : 'excuse'
        },
        number : 1
    },

    {
      id:3,
      question : 'which word is a syn of AVID?',
      answers : {
        ans1 : 'replete',
        ans2 : 'eminent',
        ans3 : 'zealous'
      },
      number : 2
    },

    {
        id:4,
        question : 'which word is a ant of FELON?',
        answers :{
            ans1 : 'unlucky',
            ans2 : 'criminal',
            ans3 : 'delinquent'
        }, 
        number : 0
    },

    {
        id:5,
        question : 'which word is ant of FURTIVE?',
        answers : {
            ans1 : 'surreptititious',
            ans2 : 'secretive',
            ans3 : 'enthusiastic'
        },
        number : 2
    },

    {
        id:6,
        question : 'which word is syn of  FABRICATE?',
        answers : {
            ans1 : 'cajole',
            ans2 : 'passionate',
            ans3 : 'manufacture'
        },
        number : 2
    },
    {
        id:7,
        question : 'which word is syn of PLETHORA?',
        answers : {
            ans1 : 'surplus',
            ans2 : 'accost',
            ans3 : 'reticent'
        },
        number : 0
    },
    {
        id:8,
        question : 'which word is ant of LOATH?',
        answers : {
            ans1 : 'abhor',
            ans2 : 'artifact',
            ans3 : 'hate'
        },
        number : 2
    },
    {
        id:9,
        question : 'which word is syn of CONDOLENCE?',
        answers : {
            ans1 : 'stipulate',
            ans2 : 'pity',
            ans3 : 'bristle'
        },
        number : 1
    },
    {
        id:10,
        question : 'which word is syn of ADROIT?',
        answers : {
            ans1 : 'enhance',
            ans2 : 'pretext',
            ans3 : 'skillful'
        },
        number : 2
    }
]
////////////////set que/////////
calcAnswer()
function calcAnswer() {
    ////reset li//////
    li.forEach((temp)=>{
        temp.classList.remove('true','false','active')
    })
    ////reset li//////
    // h3.innerText=data[turn].question
    // li[0].innerText=data[turn].answers.ans1
    // li[1].innerText=data[turn].answers.ans2
    // li[2].innerText=data[turn].answers.ans3
    if(turn<10){
        h3.innerText=data[turn].question
        li[0].innerText=data[turn].answers.ans1
        li[1].innerText=data[turn].answers.ans2
        li[2].innerText=data[turn].answers.ans3
        turn++
    }else{
        displayScore()
    }
}
////////////////////////set que///////////
///////////click on any li/////////

li.forEach((val, i)=>{
    val.addEventListener('click', ()=>{
        li.forEach(item=>item.classList.remove('active'))
        val.classList.add('active')
        num = i
    })
})

///////////click on any li/////////
///////////checkanswer//////////
function checkAnswer() {
   if(data[turn-1].number == num){
    li[num].classList.add('true')
    score++
   }else{
    li[num].classList.add('false')
    li[data[turn-1].number].classList.add('true')
   }
   setTimeout(() => {
    calcAnswer()
   }, 1000);
}
///////////checkanswer//////////

function displayScore() {
    box.innerHTML= `
    <div style="text-align: center; padding-top: 30px">
    <h3 style="font-size: 40px; color: brown; margin-bottom: 20px">your score is: <b style="font-size: 30px; color: ${score > 5 ? 'green' : 'red'}">${score}</b></h3>
    <p style="font-size: 40px; margin-bottom: 10px; color: brown">${score > 5 ? 'Great job' : 'Better luck next time!'}</p>
    </div>
    `
}

function restartQuiz(){
    score = 0
    turn = 0
    calcAnswer()
}