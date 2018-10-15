//Даны два ненулевых числа. Найти сумму, разность, произведение и частное их модулей.

const getModule = (n) => {
  if (n >= 0) {
    return n
  } else if (n < 0) {
    return -n;
  }
};

const getSum = (a, b) => console.log('Sum of a and b is: ' + (a + b));

const getDifference = (a, b) => console.log('Difference of a and b is: ' + (a - b));

const getProduct = (a, b) => console.log('Product of a and b is: ' + (a * b));

const getQuotient = (a, b) => console.log('Quotient of a and b is: ' + (a / b));

const getAllParameters = (first, second) => {
  let a = getModule(first);
  let b = getModule(second);
  getSum(a, b);
  getDifference(a, b);
  getProduct(a, b);
  getQuotient(a, b);
}
