export const sortByCases = countries => {
  const arr = [...countries];

  return arr.sort((a, b) => (a.cases > b.cases ? -1 : 1));
};
