# code-quiz

![Quiz Image](assets/mainpage.jpg)
[Link to Code quiz](https://nvrtis.github.io/code_quiz/)

## Description

This assignmend i created a quiz with a score. timer and a scoreboard

### Html

The HTML document reference a reset script, styling and javascript. 

the body element contains 3 sections; first one is meant for the rules.

second section contains the start button, but will be replaced by question and button for the quiz after the user has clicked the start button.

the last section is for the timer and score.

### CSS

In the styling the most important thing that needs mentioning is the class hide tag, that hides everything with this class. Which will be used by the javascript and will be how the quiz will work

### Javascript

The Javascript start off with all the const which is used for shortening traveling the DOM in the script. It is saved as a const because it has no need to be changed during the script

the var list is for variable that will change during the script, such as score, timer. Also a few things are set here as blank, so that i can have the variable saved in global when it get updated in the function

Then i have an object where i store all the questions

I have 2 eventlisteneres which does the same action, it is only saved on a different button, which is to start the quiz funtion

The startGame function start off by hiding everything that is nott needed, shows everything that will be needed by adding or removing the class 'hide'. It also restarts the score and currentQuestionIndex, starts the timer and starts the next function.

The userscore is used to save the users correct answers, timer is set for 60 sec and currentQuestionIndex us used for the script to know what question the user is on.

The setNextQuestion function 
has the remove old questions and button function and chooses the next question if the question is less than the question object. If you are at the end of the question object it will show the game over function

Show question function will fill in the question in the html and add class for the styling. Also will see if the correct dataset with true/false statment and will run the selectanswer funtion when a button is created.

resetState function will remove our old questions and buttons.

SelectAnswer function will compare your button click with the button with the dataset of correct and compare them. if Correct it will increase users score, if incorrect it will reduce users timer

the setStaturClass and clearStatusClass function is for setting the correct dataset class and removing it when the question is answered

timer function is set for 60 sec when startgame function is started and will count down 1 second and show up in the third section. 

the gameOver function will run when the timer is over or when user has completed the quiz, and will ask the user for their username and add the username pluss score into a variable, which will take the 5 highest scores and push it into local storage.

scoreBoard Function will show the score and push the top 5 score into a list abd then show the retry button for the user if the user want to improve their score
