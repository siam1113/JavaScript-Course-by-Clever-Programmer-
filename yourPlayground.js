const letterFrequency = (phrase) => {
  let frequency = {};

  for (const letter of phrase) {
    if (frequency[letter] != undefined) {
      frequency[letter] += 1;
    } else {
      frequency[letter] = 1;
    }
  }
  return frequency;
};

const wordFrequency = (phrase) => {
  let frequency = {};
  let words = phrase.split(" ");

  for (const word of words) {
    let trimmedWord = word.trim();
    if (trimmedWord in frequency) {
      frequency[trimmedWord]++;
    } else if (trimmedWord) {
      frequency[trimmedWord] = 1;
    }
  }
  return frequency;
};

const filter = (numbers, condition) => {
  const filtered = [];
  numbers.forEach((element) => {
    if (element < condition) {
      filtered.push(element);
    }
  });
  return filtered;
};

console.log(filter([1, 3, 4, 5, 6, 4, 34, 345, 454, 344, 3, 4, 5, 6], 2));
console.log(letterFrequency("haha"));
console.log(wordFrequency("new word  we    2w"));
