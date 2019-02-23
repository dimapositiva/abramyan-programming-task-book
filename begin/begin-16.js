// Найти расстояние между двумя точками с задаными координатами x1 и x2 на числовой оси |x2 - x1|

const getDistance = (x1, x2) => {
  let value = Math.abs(x2 - x1);
  return `Distance is: ${value}`;
}

console.log(getDistance(100, 78))
