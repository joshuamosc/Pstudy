import { useEffect } from 'react';
import { useState } from 'react';

const initalValues = {
  hoursToday: 0,
  totalHours: 0,
  spotifyToken: 0,
  set: '25:00',
  shortBreak: '5:00',
  longBreak: '10:00',
};

export const useStorage = () => {
  const [storage, setStorage] = useState(initalValues);

  // Verificar si hay valores en localStorage
  useEffect(() => {
    const hoursToday = localStorage.getItem('hoursToday');
    const totalHours = localStorage.getItem('totalHours');
    const spotifyToken = localStorage.getItem('spotifyToken');
    const set = localStorage.getItem('set');
    const shortBreak = localStorage.getItem('shortBreak');
    const longBreak = localStorage.getItem('longBreak');

    const existValues = [
      hoursToday,
      totalHours,
      spotifyToken,
      set,
      shortBreak,
      longBreak,
    ].every((item) => item !== undefined);

    if (!existValues) return;

    setStorage({
      hoursToday,
      totalHours,
      spotifyToken,
      set,
      shortBreak,
      longBreak,
    });
  }, []);

  const handleSetStorage = (newStorage) => {
    setStorage(newStorage);
    localStorage.setItem('hoursToday', newStorage.hoursToday);
    localStorage.setItem('totalHours', newStorage.totalHours);
    localStorage.setItem('spotifyToken', newStorage.spotifyToken);
    localStorage.setItem('set', newStorage.set);
    localStorage.setItem('shortBreak', newStorage.shortBreak);
    localStorage.setItem('longBreak', newStorage.longBreak);
  };

  return {
    storage,
    handleSetStorage,
  };
};
