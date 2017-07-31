var inquirer = require("inquirer");

var Basic = function(front, back) {
  this.front = front;
  this.back = back;
};

var cards = [];

function firstPresident(){


inquirer.prompt([
  {
    type: "input",
    name: "president1",
    message: "Who was the first president of the United States?"

  }

]).then(function(inquirerResponse) {
  if (inquirerResponse.president1 === "George Washington"){
    console.log("Correct!" );
    beerQuestion();
  } else {
    console.log("The correct answer is George Washington");
    beerQuestion();
  }
});
}
firstPresident();

function beerQuestion(){
  inquirer.prompt([
    {
      type: "input",
      name: "beer",
      message: "What is the best type of beer?"

    },


]).then(function(inquirerResponse) {
  if (inquirerResponse.beer === "Stout"){
    console.log("Correct!" );
    beerQuestion();
  } else {
    console.log("The correct answer is Stout");
    beerQuestion();
  }
});
}
// beerQuestion();



// module.exports = BasicCard;
