/**
 * ! Problem 1
 *
 * ? Multiples of 3 and 5
 *
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
 * The sum of these multiples is 23.
 * Find the sum of all the multiples of 3 or 5 below 1000.
 */

const multipleOf3 = []
const multipleOf5 = []
let result = 0

const findMultiple = (number, multiple) => {
  let rest = number % multiple
  if (rest === 0) return true
  else return false
}

const sumMultiple = (multiples) => {
  for (let i = 0; i < multiples.length; i++) {
    result += parseInt(multiples[i])
  }
  return result
}

for (let i = 0; i < 1000; i++) {
  if (findMultiple(i, 3)) multipleOf3.push(i)
  if (findMultiple(i, 5)) multipleOf5.push(i)
}

console.log(`The multiples of 3 are ${multipleOf3}`)
console.log(`Result: ${sumMultiple(multipleOf3)}`)
console.log(`The multiples of 5 are ${multipleOf5}`)
console.log(`Result: ${sumMultiple(multipleOf5)}`)
