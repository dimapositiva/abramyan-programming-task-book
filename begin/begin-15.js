//Дана площадь S круга. Найти его диаметр D и длину L окружности, ограничивающей этот круг.

const getAllParameters = s => {
  const round = (n, i) => {
    return Number(Math.round(n + 'e' + i) + 'e-' + i);
  };
  let d = round((Math.sqrt(s / 3.14) * 2), 2);
  let l = round((3.14 * d), 2);
  console.log(`D = ${d}, L = ${l}`);
};
