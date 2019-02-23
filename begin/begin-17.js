// Даны три точки A, B, C на числовой оси. Найти длины отрезков AC и BC и их сумму

const getValues = (a, b, c) => {
  let ac = Math.abs(a - c);
  let bc = Math.abs(b - c);
  let sum = ac + bc;
  let result = `AC is: ${ac}, BC is: ${bc}, sum is: ${sum}`;
  return result;
}
