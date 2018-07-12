//Даны длины ребер a, b, c прямоугольного параллелепипеда. Найти его объем V = abc и площадь поверхности S = 2*(ab + bc + ac).

let abc = {
  'v': (a, b, c) => console.log('Volume is:' + a*b*c),
  's': (a, b, c) => console.log('Surface square is:' + 2*(a*b + b*c + a*c))
}
