function calcAvgSquare(num1, num2, num3) {
  let answer = (((num1 + num2 + num3)/3) * num1**2)
  return answer
}

let number1 = parseInt(prompt("Enter number 1"))
  let number2 = parseInt(prompt("Enter number 2"))
  let number3 = parseInt(prompt("Enter number 3"))

let newAnswer = calcAvgSquare(number1, number2, number3)
  console.log(`The answer is ${newAnswer}`) 