console.log("Welcome to the quiz");

let quizzes = [{
question1 : "What color is grass?",
answer1 : "Green",
},{
question2 : "How old am I?",
answer2 : "24"
}, {
question3 : "Who lives in Gotham city: Spiderman or Batman?",
answer3 : "Batman"
}]

let score = 0;
// console.log(quizzes[0].question1);
let promptline1 = prompt(quizzes[0].question1);
console.log("You answered: " + promptline1[0].toUpperCase() + promptline1.slice(1));

if(promptline1[0].toUpperCase() + promptline1.slice(1) == "Green"){
    console.log("Correct! The answer is: " + quizzes[0].answer1)
    score++;
}else{
    console.log("Wrong! The correct answer is: " + quizzes[0].answer1)
}

let promptline2 = prompt(quizzes[1].question2);
console.log("You answered: " + promptline2);

if(promptline2 == 24){
    console.log("Correct! The answer is: " + quizzes[1].answer2)
    score++;
}else{
    console.log("Wrong! The correct answer is: " + quizzes[1].answer2)
}

let promptline3 = prompt(quizzes[2].question3);
console.log("You answered: " + promptline3);

if(promptline3[0].toUpperCase() + promptline3.slice(1) == "Batman"){
    console.log("Correct! The answer is: " + quizzes[2].answer3)
    score++;
}else{
    console.log("Wrong! The correct answer is: " + quizzes[2].answer3)
}

console.log("Thanks for taking the quizz! You scored: " + score + "/3 points!");