const pw = document.querySelector("#pw");
const zahl = document.querySelector("#zahl");
const ausgabe = document.querySelector("#ergebnis");
const task = document.querySelector("#encrypt");
const reset = document.querySelector("#reset");

function letter(letter, num) {
  let ergebnis = letter.charCodeAt();
  num % 26 === 0 ? (num = 26) : (num = num % 26);
  let newNr = ergebnis + num;
  if (ergebnis >= 65 && ergebnis <= 90) {
    if (newNr > 90) {
      newNr = newNr - 90 + 64;
    } else if (newNr < 65) {
      newNr += 26;
    }
  }

  if (ergebnis >= 97 && ergebnis <= 122) {
    if (newNr > 122) {
      newNr = newNr - 122 + 96;
    } else if (newNr < 97) {
      newNr += 26;
    }
  }
  ergebnis = String.fromCharCode(newNr);
  return ergebnis;
}

function shiftChar(myArray, num) {
  let shiftedLetters = [];
  for (let i = 0; i < myArray.length; i++) {
    shiftedLetters.push(letter(myArray[i], num));
  }
  let test = shiftedLetters.join("");
  ausgabe.textContent = test;
}

task.addEventListener("click", function () {
  const num = parseInt(zahl.value);
  const inp = pw.value;
  myArray = inp.split("");
  shiftChar(myArray, num);
});

reset.addEventListener("click", () => {
  zahl.value = "";
  pw.value = "";
  location.reload();
});
