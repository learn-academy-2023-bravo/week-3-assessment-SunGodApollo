// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.
describe("fibonacci", () => {
  it("takes in a number greater than 2, and returns an array that length containing the numbers of the Fibonacci sequence", () => {
    const fibLength1 = 6
    // Expected output: [1, 1, 2, 3, 5, 8]
    const fibLength2 = 10
    // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
    expect(fibonacci(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
    expect(fibonacci(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})

// FAIL  ./code-challenges.test.js
// fibonacci
//   ✕ takes in a number greater than 2, and returns an array that length containing the numbers of the Fibonacci sequence (2 ms)

// ● fibonacci › takes in a number greater than 2, and returns an array that length containing the numbers of the Fibonacci sequence

//   ReferenceError: fibonacci is not defined



// b) Create the function that makes the test pass.
/* PSEUDOCODE
    -create a function named fibonacci
    -input: number
      process: I want to take in a number, and return an array with that specified number length
              -put number the user provides into an array
              -the number has to be greater than two
              -since the fibonacci sequence always begins with 1 and 1, I can start the array with the first two numbers as [1, 1]

              -I want to iterate to increase the numbers after the first two numbers, so I will start the loop at 2, to start at the 3rd index of the array.
              -I will need a for loop to add the two previous numbers in the array
              -the result of adding the previous two numbers is then assigned to the next index, in the case of [1, 1], the next index will be 2
              -and the loops does it again, as long as the index is less than the range of the argument provided by the user.
    output: array  
*/
const fibonacci = (number) => {
  let fibNumbersArray = [1, 1]

  for (let index = 2; index < number; index++) {
    fibNumbersArray[index] = fibNumbersArray[index - 1] + fibNumbersArray[index - 2]
  }
  return fibNumbersArray
}

// PASS  ./code-challenges.test.js
// fibonacci
//   ✓ takes in a number greater than 2, and returns an array that length containing the numbers of the Fibonacci sequence (2 ms)






// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.
describe("objectsArraySorted", () => {
  it("takes in an object and returns an array of the values sorted from least to greatest", () => {
    const studyMinutesWeek1 = {
      sunday: 90,
      monday: 30,
      tuesday: 20,
      wednesday: 15,
      thursday: 30,
      friday: 15,
      saturday: 60
    }
    // Expected output: [15, 15, 20, 30, 30, 60, 90]
    const studyMinutesWeek2 = {
      sunday: 100,
      monday: 10,
      tuesday: 45,
      wednesday: 60,
      thursday: 20,
      friday: 15,
      saturday: 65
    }
    // Expected output: [10, 15, 20, 45, 60, 65, 100]
    expect(objectsArraySorted(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
    expect(objectsArraySorted(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
  })
})

// FAIL  ./code-challenges.test.js
// fibonacci
//   ✓ takes in a number greater than 2, and returns an array that length containing the numbers of the Fibonacci sequence (3 ms)
// objectsArraySorted
//   ✕ takes in an object and returns an array of the values sorted from least to greatest

// ● objectsArraySorted › takes in an object and returns an array of the values sorted from least to greatest

//   ReferenceError: objectsArraySorted is not defined


// b) Create the function that makes the test pass.
/* PSEUDOCODE
    -create a function named objectsArraySorted
    - input: it will take in an object
    - process: 
        -take in the object, and convert it into an array using object.values method
        -once that object is an array, use the .sort method to sort it from smallest to largest
        -use a comparison function to sort the indexes properly.
    - output: an array with number values sorted from least to greatest.
*/

const objectsArraySorted = (object) => {
  let objectArray = Object.values(object)
  return objectArray.sort((value, index) => value - index)
}

// PASS  ./code-challenges.test.js
// fibonacci
//   ✓ takes in a number greater than 2, and returns an array that length containing the numbers of the Fibonacci sequence (3 ms)
// objectsArraySorted
//   ✓ takes in an object and returns an array of the values sorted from least to greatest (1 ms)




// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.
describe("summedArray", () => {
  it("takes in an array and returns an array of the accumulating sum", () => {
    const accountTransactions1 = [100, -17, -23, -9]
    // Expected output: [100, 83, 60, 51]
    const accountTransactions2 = [250, -89, 100, -96]
    // Expected output: [250, 161, 261, 165]
    const accountTransactions3 = []
    // Expected output: []
    expect(summedArray(accountTransactions1)).toEqual([100, 83, 60, 51])
    expect(summedArray(accountTransactions2)).toEqual([250, 161, 261, 165])
    expect(summedArray(accountTransactions3)).toEqual([])
    
  })
})

// FAIL  ./code-challenges.test.js
// fibonacci
//   ✓ takes in a number greater than 2, and returns an array that length containing the numbers of the Fibonacci sequence (2 ms)
// objectsArraySorted
//   ✓ takes in an object and returns an array of the values sorted from least to greatest (1 ms)
// summedArray
//   ✕ takes in an array and returns an array of the accumulating sum (1 ms)

// ● summedArray › takes in an array and returns an array of the accumulating sum

//   ReferenceError: summedArray is not defined


// b) Create the function that makes the test pass.
/* PSEUDOCODE
    - Create a function called summedArray
    - input: array
    - process: Need a variable to hold the sum of the numbers
              I have to iterate over the array, summing the first index to the next index, and storing it in the variable
              -use .map method to iterate over array, which will then convert the summed values into a new array of the same length
              
    - output: new array of the same length, with the numbers summed.
*/

const summedArray = (array) => {
  let sumOfValues = 0
  return array.map((value) => {
    return sumOfValues = sumOfValues + value
  })
}

// PASS  ./code-challenges.test.js
// fibonacci
//   ✓ takes in a number greater than 2, and returns an array that length containing the numbers of the Fibonacci sequence (2 ms)
// objectsArraySorted
//   ✓ takes in an object and returns an array of the values sorted from least to greatest
// summedArray
//   ✓ takes in an array and returns an array of the accumulating sum (1 ms)