// Даны три точки A, B, C на числовой оси. Точка C расположена между точками A и B. Найти произведение длин отрезков AC и BC.

const getSumOfDistances = (a, b, c) => {
  let ac = Math.abs(a - c);
  let bc = Math.abs(c - b);
  let prod = ac * bc;
  return `Production of AC and BC is: ${prod}`;
}
