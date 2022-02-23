const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
  "**********": " ",
};

function decode(expr) {
  // write your solution here
  let i = 0;
  let arr = [];
  let morseArr = [];
  let decodesString = "";

  while (i < expr.length) {
    arr.push(expr.slice(i, i + 10));
    i += 10;
  }

  arr.forEach((el) => {
    let string = "";
    let i = 0;
    while (i < el.length) {
      if (el[i] === "1") {
        if (el[i + 1] === "1") {
          string += "-";
        } else {
          string += ".";
        }
        i += 1;
      } else if (el[i] === "*") {
        string += "*";
      }
      i += 1;
    }
    morseArr.push(string);
  });

  console.log(morseArr);

  morseArr.forEach((code) => {
    decodesString += MORSE_TABLE[code];
  });

  return decodesString;
}

module.exports = {
  decode,
};
