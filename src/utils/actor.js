export const getAge = (dateBorn) => {
  const today = new Date();
  const actorDate = new Date(dateBorn);
  const age = today.getFullYear() - actorDate.getFullYear();
  const diferenceBetweenMonths = today.getMonth() - actorDate.getMonth();
  const isMonthDiference = diferenceBetweenMonths < 0;
  const idDayDiference =
    diferenceBetweenMonths === 0 && today.getDate() < actorDate.getDate();

  return isMonthDiference || idDayDiference ? age - 1 : age;
};

export const getGender = (gender) => (gender === 'M' ? 'Actor' : 'Actress');
