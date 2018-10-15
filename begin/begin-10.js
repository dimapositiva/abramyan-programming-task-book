//Даны два ненулевых числа. Найти сумму, разность, произведение и чатное их квадратов.

const getSum = (a, b) => console.log('Sum of a and b is: ' + (a + b));
const getDifference = (a, b) => console.log('Difference of a and b is: ' + (a - b));
const getProduct = (a, b) => console.log('Product of a and b is: ' + (a * b));
const getQuotient = (a, b) => console.log('Quotient of a and b is: ' + ((a * a) / (b * b)));

const getAllValue = (a, b) => {
  getSum(a, b);
  getDifference(a, b);
  getProduct(a, b);
  getQuotient(a, b);
};
