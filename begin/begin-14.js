//Дана L окружности. Найти её радиус R и площадь S круга, ограниченного этой окружностью.

const getAllParameters = l => {
  const round = (n, i) => {
    return Number(Math.round(n + 'e' + i) + 'e-' + i);
};
  let R = round((l / (2 * 3.14)), 2);
  let S = round((3.14 * (R ** 2)), 2);
  console.log(`R = ${R}, S = ${S}`);
};
