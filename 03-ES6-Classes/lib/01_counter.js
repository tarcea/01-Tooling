class Counter {
  constructor(text) {
    // TODO: build an internal Map of word => occurrences.
    let noCommaText = "";
    // split text in an array with words
    noCommaText = text.replace(/,/g, ""); // remove commas
    // console.log(noCommaText);
    const myArray = noCommaText.split(" "); // each word in my text is an element in myArray
    console.log(myArray);
    // count the ocurence of each word in yhe array
    let index = 0;
    let count = 0;
    let i;
    while (index !== myArray.length) {
      for (i = 0; i <= myArray.length; i += 1) {
        if (myArray[i] === myArray[index]) {
          count += 1;
        }
        console.log(`${myArray[i]}: ${count} `);
      }
      index += 1;
    }

    // build the map
  }

  occurrences(word) {
    // TODO: return the number of occurrences
  }
}

module.exports = Counter;
