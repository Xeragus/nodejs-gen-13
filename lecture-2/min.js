let numbers = [1, 4, 3, 5, 4, 3];
// Odredi go najgolemiot broj vo nizata

let min = Math.max(1, 4, 3, 5, 4, 3);

numbers.forEach(currentNumber => {
  if (currentNumber < min) {
    min = currentNumber;
  }
});

console.log(min);
