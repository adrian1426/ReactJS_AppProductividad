import React, { useReducer, createContext } from 'react';
import userReducer from './user/userReducer';
import { initialState } from './user/userInitialState';

const UserContext = createContext();

export const UserProvider = props => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;