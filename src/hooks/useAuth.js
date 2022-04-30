import { useState, useEffect } from 'react';
import { userSelected } from '../constants/CommonContants';

export const useAuth = () => {
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(userSelected)) {
      setLogged(true);
    } else {
      setLogged(false);
    }
  }, []);

  return logged;
};