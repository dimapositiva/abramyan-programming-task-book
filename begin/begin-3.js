//Даны стороны прямоугольника a и b. Найти его площадь S = a*b и периметр P = 2(a + b).

const getPerimAndAquare = (a, b) => {
  let perim = 2*(a + b);
  let square = a * b;
  console.log('Perimeter is: ' + perim + '\n' + 'square is: ' + square);
};
