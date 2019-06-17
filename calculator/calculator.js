module.exports = {
  add,
};

// function add(a = 0, b = 0) {
//   return a + b ;
// }

function add(...numbers) {
  return numbers.reduce((accumulator, element) => {
    return accumulator + element; 
      // 0 + 1 -> accu
      // 1 + 2 -> accu
      // 3 + 3 -> result
  }, 0)
}
