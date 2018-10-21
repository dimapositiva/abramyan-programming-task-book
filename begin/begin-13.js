//Даны два круга с общим центром и радиусами R1 и R2 (R1 > R2). Найти площадь этих кругов S1 и S2, а также площадь S3 кольца, внешний радиус которого равен R1, а внутренний радиус равен R2.

const getRingSquare = (r1, r2) => {
  const round = (n, i) => {
    return Number(Math.round(n + 'e' + i) + 'e-' + i);
}
  if (r1 > r2) {
    let S1 = round((3.14 * (r1 ** 2)), 2);
    let S2 = round((3.14 * (r2 ** 2)), 2);
    let S3 = round((S1 - S2), 2);
    console.log(`S1= ${S1}, S2 = ${S2}, S3 = ${S3}`);
  } else {
    console.log('Error! First argument must be biggest than second argument.');
  };
};
