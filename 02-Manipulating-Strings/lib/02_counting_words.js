function occurrences(text, word) {
  // split text in an array of words
  let myArray = [];
  myArray = text.split(" ");
  // each word in my array, I compare it wit 'word' and count the matches;
  let count = 0;
  myArray.forEach((myword) => {
    if (word === myword.toLowerCase()) {
      count += 1;
    }
  });
  return count;
}

module.exports = occurrences;
