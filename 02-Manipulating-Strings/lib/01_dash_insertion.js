function insertDash(word) {
  // TODO: implement the method and return word with dashes
  if (word === "") {
    return word;
  }
  const cons = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "x", "z"];
  const myArray = Array.from(word);
  const result = [];
  let strRes = "";
  let count = 0;
  while (count !== myArray.length) {
    if (cons.includes(myArray[count]) && cons.includes(myArray[count + 1])) {
      result.push(`${myArray[count]}-`);
    } else {
      result.push(myArray[count]);
    }
    count += 1;
  }
  strRes = result.join('');
  return strRes;
}

module.exports = insertDash;
