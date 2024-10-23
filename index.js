
// Дано тризначне число, яке надае користувач, потрибно визначити:
// Чи правда, що всі цифри однакові?
// Чи є серед цифр цифри однакові?

const number = prompt("Введіть тризначне число:");
const numberStr = number.toString();

let sameNumbers = true;
let repeatNumbers = false;

const firstNumber = numberStr[0];
for (let i = 1; i < numberStr.length; i++) {
    if (numberStr[i] !== firstNumber) {
        sameNumbers = false;
    }
    if (numberStr.indexOf(numberStr[i]) !== i) {
        repeatNumbers = true;
    }
}

console.log(`Чи всі цифри однакові? ${sameNumbers}`);
console.log(`Чи є серед цифр цифри однакові? ${repeatNumbers}`);