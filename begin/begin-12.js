//Даны катеты прямоугольного треугольника a и b. Найти его гипотенузу c и периметр P.

const getPerimeter = (a, b) => {
  let c = Math.sqrt((a * a) + (b * b));
  let p = a + b + c;
  console.log('Perimeter is: ' + p);
};
