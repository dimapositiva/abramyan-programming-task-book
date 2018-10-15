//Найти длину окружности L и площадь круга S заданого радиуса R:
//L = 2 * pi * R, S = pi * R2

const getCircleRadius = R => console.log('Cicle radius is: ' + 2 * 3.14 * R);
const getCircleSquare = R => console.log('Circle square is: ' + 3.14 * (Math.pow(R, 2)));

const getAllParameters = (R) => {
  getCircleRadius(R);
  getCircleSquare(R);
}
