import { useState, useCallback, useEffect } from 'react';

const API = 'https://data.cinetica-tech.com/test/api/actors';

export const useActors = () => {
  const [actors, setActors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getActors = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetch(API);
      const data = await response.json();
      setActors(data);
    } catch (requestError) {
      setError(requestError);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getActors();
  }, [getActors]);

  return { actors, isLoading, error };
};

export const useEditName = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const changeName = useCallback(async (actorId, newName) => {
    try {
      setIsLoading(true);
      await fetch(API, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: actorId, name: newName }),
      });
    } catch (requestError) {
      setError(requestError);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { changeName, isLoading, error };
};
