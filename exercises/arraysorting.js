// Test you code by forking this repl:
// 👉

// Write a function that takes in an array and sort the numbers inside from least to greatest

function sortArray(array) {
  const nums = new Set(array);
  sorted = [];

  nums.forEach(() => {
    let max = 0;
    for (const num of nums) {
      if (max < num) {
        max = num;
      }
      nums.delete(max);
      sorted.unshift(max);
      max = 0;
    }
  });

  return sorted;
}

console.log(sortArray([1, 2, 4, 10, 2, 200]));

// BONUS sort the array without using .sort()
