module.exports = {
  add,
};

// function add(a = 0, b = 0) {
//   return a + b ;
// }

function add(args) {                         // Array.from(arguments)
  const numbers = Array.isArray(args) ? args : [ ...arguments ];
  // whenever you have a set of args you have access to a fake arguments 
  //selection that you can convert into an array. collection of elements called arguments.

  //if i already have an array, check for it to sees if there are args in it
  // if thats the case make numbers be args because its already an array
  // but if not, i could take the arguments collection and generate an array from it
  //arguments given by javascript, always going to be there
  //i'm going to generate a new array passing in the new arguments, not the args
  //i'm creating a brand new array on the spot with the spread operator
  //either way i'm going to have an array

  return numbers.reduce((accumulator, element) => {
    return accumulator + element; 
      // 0 + 1 -> accu
      // 1 + 2 -> accu
      // 3 + 3 -> result
  }, 0)
}
