// Const and Var list
const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

var keepingScore = document.getElementById('score')
var userScore = 0
console.log(userScore)
var currentQuestionIndex
var timerScore = document.getElementById('timer')
var update = setInterval ('Countdowntimer()', 1000);

// starts quiz
startButton.addEventListener('click', startGame)

// start game fuction
function startGame() {
  timer = 60
  userScore = 0
//   removes startbutton
  startButton.classList.add('hide')
//   shows what qustion the user is on
  currentQuestionIndex = 0; currentQuestionIndex < questions.length;
//   shows question and buttons
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
//  
}

// removes old questions and add new ones in
function setNextQuestion() {
  resetState()
  showQuestion(questions[currentQuestionIndex])
}

// shows qustions, buttons, class to buttons, fills in text to buttons, add class btn (for style) and appends
function showQuestion(question) {
// fills in the question
  questionElement.innerText = question.question
// creates buttons
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    // fills in inner text
    button.innerText = answer.text
    // adds style with class
    button.classList.add('btn') 
    // adds true/false statment so score works
    if (answer.correct) {
        button.dataset.correct = answer.correct}
        // starts new function
    button.addEventListener('click', selectAnswer)
    // appends buttons
    answerButtonsElement.appendChild(button)
  })
}

// reset our form
function resetState() {
  clearStatusClass(document.body)
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

// takes the users selected button and compare it to the button with the dataset correct
function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
//   if user answered correctly it will increase in score
  if (selectedButton.dataset = correct) {
    userScore++;
    keepingScore.innerText = 'score = ' + userScore
}
// else reduce timer with 5 sec
  else {
      timer = timer -5
  }
//   show the next question in the quiz list
currentQuestionIndex++
  setNextQuestion()
}

// adds the dataset correct to the true statment and clears the old one
function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } 
}

// clears the dataset 
function clearStatusClass(element) {
  element.classList.remove('correct')
}

// timer
function Countdowntimer () {
    timer = timer -1;
    if ( timer < 60) {
        timerScore.innerHTML = timer
    }
    if(timer < 1) {
        window.clearInterval(update)
    }
}

// question list
const questions = [
    {
      question: 'What is 2 + 2?',
      answers: [
        { text: '4', correct: true },
        { text: '22', correct: false },
        { text: '22', correct: false },
        { text: '22', correct: false }
      ]
    },
    {
      question: 'What does HTML stand for?',
      answers: [
        { text: 'Hypertext Markup Language', correct: true },
        { text: 'How to meet ladies', correct: false },
        { text: 'Dev EdHawaiian Test Missile Launcher', correct: false },
        { text: 'HyperText Missing Language', correct: false}
      ]
    },
    {
      question: 'Is web development fun?',
      answers: [
        { text: 'Kinda', correct: false },
        { text: 'YES!!!', correct: true },
        { text: 'Um no', correct: false },
        { text: 'IDK', correct: false }
      ]
    },
    {
      question: 'What is 4 * 2?',
      answers: [
        { text: '6', correct: false },
        { text: '8', correct: true },
        { text: '6', correct: false },
        { text: '6', correct: false }
      ]
    },
    {
      question: 'What does CSS stand for?',
      answers: [
        { text: 'Counter-Strike: Source', correct: false },
        { text: 'Cascading Style Sheets ', correct: true },
        { text: 'Character Selection Screen', correct: false },
        { text: 'Chicken Salad Sandwich', correct: false }
      ]
    },
    {
      question: 'Who is making the Web standards?',
      answers: [
        { text: 'Mozilla', correct: false },
        { text: 'The World Wide Web Consortium', correct: true },
        { text: 'Microsoft', correct: false },
        { text: 'Google', correct: false }
      ]
    },
    {
      question: 'Choose the correct HTML element for the largest heading?',
      answers: [
        { text: '<head>', correct: false },
        { text: '<h6>', correct: false },
        { text: '<Your Mom>', correct: false },
        { text: '<h1>', correct: true }
      ]
    },
  ]


  if (timer === 0 || currentQuestionIndex === questions.length) {
    //   game over /  save high score screen / maybe make a function and run it
    prompt('game over')}




// when timer reaches 0  the quiz will be over
// when quiz is over, then the user can save its initials and score to local
// after the user have save the score, the quiz then restart at the menu site




// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score
// Mock-Up
// The following animation demonstrates the application functionality:
