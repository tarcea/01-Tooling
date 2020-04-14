class Counter {
  constructor(text) {
    // TODO: build an internal Map of word => occurrences.
    this.map = new Map();
    // console.log(text.length);
    if (text.length > 0) {
      let noCommaText = "";
      // split text in an array with words
      noCommaText = text.replace(/,/g, ""); // remove commas
      // console.log(noCommaText);
      const myArray = noCommaText.split(" "); // each word in my text is an element in myArray
      // console.log(myArray);
      // count the ocurence of each word in the array
      myArray.forEach((word) => {
        const lowerWord = word.toLowerCase();
        this.map.set(lowerWord, (this.map.get(lowerWord) || 0) + 1);
      });

      // build the map
    } else {
      return 0;
    }
  }
  occurrences(word) {
    // TODO: return the number of occurrences
    return this.map.get(word.toLowerCase()) || 0;
  }
}

module.exports = Counter;

module.exports = Counter;
