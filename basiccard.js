var inquirer = require("inquirer");

var Basic = function(front, back) {
  this.front = front;
  this.back = back;
};

var cards = [];

var creatQuestion = function(){
  if (cards.length < 3){
    console.log("\nNew Card!\n");
inquirer.prompt([
  {
    type: "input",
    name: "question",
    message: "Who was the first president of the United States?"

  },
  {
    type: "input",
    name: "question",
    message: "Who was the second president of the United States?"
  },
  {
    type: "input",
    name: "question",
    message: "Who was the third president of the United States?"

  }

]).then(function(answers) {
  console.log("answer");
});
}
};

module.exports = BasicCard;
