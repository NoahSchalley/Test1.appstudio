function calcAvgSquare(num1, num2, num3) {
   answer = (((num1 + num2 + num3)/3) * num1**2)
  return answer
}

function divideTwo(num1, num2) {
  answer = (num1 % num2)
  return answer
}

number1 = parseInt(prompt("Enter number 1"))
  number2 = parseInt(prompt("Enter number 2"))
  number3 = parseInt(prompt("Enter number 3"))

question = prompt("want to do an average calculation or a remainder of the division of two numbers calculation?") 
  if(question == "remainder") {
newAnswer = divideTwo(number1, number2)
      let division = number1/number2
  console.log(`The result of dividing ${number1} by ${number2} is (${division}) with a reminder of ${newAnswer}`) 
} else {
let newAnswer = calcAvgSquare(number1, number2, number3)
  console.log(`The answer is ${newAnswer}`) 
}
