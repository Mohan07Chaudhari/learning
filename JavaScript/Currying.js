const prices = {
  "Product 1": 10,
  "Product 2": 20,
  "Product 3": 30,
}

/**
 * This function will get curried.
 */
function printBill(date, productName, quantity) {
  let dateString = "Date					Product				Total"

 // let dateString = `Date: ${date.toDateString()}`
  let message = `${date.toDateString()}		${productName}			${quantity * prices[productName]}`

  console.log(dateString)
  console.log(message)
  console.log()
  console.log()  
}

/**
 * This function curries the function passed to it.
 */
function currying(functionToBeCurried) {
  return function curriedFunction(...args) {
    if (args.length >= functionToBeCurried.length) {
      return functionToBeCurried.apply(this, args)
    } else {
      return function (...args2) {
        return curriedFunction.apply(this, args.concat(args2))
      }
    }
  }
}

// Curried version of the printBill.
let curriedPrintBill = currying(printBill)

const today = new Date()

console.log("Calling original function.")
printBill(today, "Product 1", 10) // Original function.

console.log("Calling curried function with original arguments.")
curriedPrintBill(today, "Product 1", 10) // Curried function with original arguments.

console.log("Calling curried function with single argument.")
curriedPrintBill(today)("Product 1")(10) // Curried function with single argument.

console.log("Calling curried function with multi-argument variant.")
curriedPrintBill(today)("Product 1", 10) // Curried function with multi-argument variant.

// Create 'partially applied function' with today's date. The first argument of 'printTodaysBill' is fixed to today's date.
let printTodaysBill = curriedPrintBill(today)
console.log("Calling 'partially applied function' with today's date.")
printTodaysBill("Product 1", 10)

// Another 'partially applied function' with today's date and Product 1 as fixed arguments.
let printTodaysBillForProduct1 = curriedPrintBill(today)("Product 1")
console.log(
  "Calling 'partially applied function' with today's date and 'Product 1' as fixed arguments.",
)
printTodaysBillForProduct1(10)
