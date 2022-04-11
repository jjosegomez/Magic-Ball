

let positiveAnswers = [
  "As I see it, yes",
  "It is certain",
  "It is decidedly so",
  "Yes",
  "Yes, definitely"
];

let negativeAnswers = [
  "My reply is no",
  "My sources say no",
  "There is no way",
  "No",
  "Absolutely not!"
];

let maybeAnswers = [
  "Ask again later",
  "Better to not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Reply hazy try again"
];

const NO_QUESTION_WARNING = "You need to ask a question!";

function chooseRandomAnswer(answerType) {

  let randomNum = getRandomNumber(0,4);
  if(answerType === "positive"){
    return positiveAnswers[randomNum];
  }
  if(answerType === "negative"){
    return negativeAnswers[randomNum];
  }
  if(answerType === "maybe"){
    return maybeAnswers[randomNum];
  }
  console.log(randomNum);
  console.log(answerType);
}


function chooseRandomAnswerType() {

  randomNum = getRandomNumber(0, 2);
  
  if (randomNum === 0){
    return "maybe";
    
  }
  if (randomNum === 2){
    return "negative";
  }
  if (randomNum === 1){
    return "positive";
  }
  console.log(randomNum);
  
}


function onAnswerRequested() {
	if (getQuestionText() === ""){
    return supplyAnswer(NO_QUESTION_WARNING);
  }
  else{
    return supplyAnswer( chooseRandomAnswer(chooseRandomAnswerType()));
  }
}

