const arr = [];

const logic = (result, movement = 0) => {
  if (movement > result.length - 1) {
    return arr;
  } else {
    if (isNaN(result[movement]) || result[movement] == '<empty>') {
      arr.splice(movement, 0, 'Invalid Character');
    } else if (
      result[movement] % 5 == 0 &&
      result[movement] % 3 == 0 &&
      result[movement] != 0
    ) {
      arr.splice(movement, 0, 'FizzBuzz');
    } else if (result[movement] % 5 == 0 && result[movement] != 0) {
      arr.splice(movement, 0, 'Buzz');
    } else if (result[movement] % 3 == 0 && result[movement] != 0) {
      arr.splice(movement, 0, 'Fizz');
    } else {
      arr.splice(
        movement,
        0,
        `Divided ${result[movement]} by 3 & Divided ${result[movement]} by 5`,
      );
    }
    logic(result, movement + 1);
  }
};

module.exports = {logic, arr};
