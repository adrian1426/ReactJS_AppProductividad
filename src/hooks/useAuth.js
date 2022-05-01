import { useState, useEffect, useContext } from 'react';
import { userSelected } from '../constants/CommonContants';
import UserContext from '../context/UserContext';
import { removeUserAction } from '../context/user/userAction';
import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
  const [logged, setLogged] = useState(false);
  const { state, dispatch } = useContext(UserContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem(userSelected);
    dispatch(removeUserAction());
    navigate('/');
  };

  useEffect(() => {
    if (localStorage.getItem(userSelected) || state._id !== 0) {
      setLogged(true);
    } else {
      setLogged(false);
    }
  }, [state]);

  return { isLogged: logged, logout };
};