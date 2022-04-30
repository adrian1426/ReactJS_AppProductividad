import { useState, useEffect, useContext } from 'react';
import { userSelected } from '../constants/CommonContants';
import UserContext from '../context/UserContext';

export const useAuth = () => {
  const [logged, setLogged] = useState(false);
  const { state } = useContext(UserContext);

  useEffect(() => {
    if (localStorage.getItem(userSelected) || state._id !== 0) {
      setLogged(true);
    } else {
      setLogged(false);
    }
  }, [state]);

  return logged;
};