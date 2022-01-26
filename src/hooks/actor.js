import { useState } from 'react';

export const useGetActors = () => {
  const [actors, setActors] = useState([]);

  const getActors = async () => {
    const response = await fetch(
      'https://data.cinetica-tech.com/test/api/actors'
    );
    const data = await response.json();
    setActors(data);
  };

  getActors();

  return { actors };
};

export const useGetAge = () => {
  const getAge = (dateBorn) => {
    const today = new Date();
    const actorDate = new Date(dateBorn);
    const diferenceBetweenMonths = today.getMonth() - actorDate.getMonth();
    let age = today.getFullYear() - actorDate.getFullYear();
    if (
      diferenceBetweenMonths < 0 ||
      (diferenceBetweenMonths === 0 && today.getDate() < actorDate.getDate())
    ) {
      age--;
    }
    return age;
  };

  return { getAge };
};
