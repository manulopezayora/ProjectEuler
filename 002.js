/**
 * ! Problem 2
 *
 * ? Even Fibonacci numbers
 *
 * Each new term in the Fibonacci sequence is generated by adding the previous two terms.
 * By starting with 1 and 2, the first 10 terms will be:
 * 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
 * By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
 */

let secuence = []
let evenNumbers = []
let result = 0

const fibonacciSecuence = (number) => {
  let fiboNumbers = [0, 1]
  for (let i = 2; i < number; i++) {
    fiboNumbers[i] = fiboNumbers[i - 2] + fiboNumbers[i - 1]
  }
  return fiboNumbers
}

const sumFibonacciEvens = (evens) => {
  for (let i = 0; i < evens.length; i++) {
    result += parseInt(evens[i])
  }
  return result
}

secuence = fibonacciSecuence(4000000)
secuence.map((number) => {
  if (number % 2 === 0) {
    evenNumbers.push(number)
  }
})

console.log(
  `
  The sum of the even fibonacci numbers less than four million is: 
  ${sumFibonacciEvens(evenNumbers)}
  `
)