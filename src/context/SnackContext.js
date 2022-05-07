import { createContext, useState } from 'react';

const SnackContext = createContext();

const initialState = {
  open: false,
  severity: 'info',
  msg: ''
};

export const SnackProvider = props => {
  const [snack, setSnack] = useState(initialState);

  return (
    <SnackContext.Provider value={{ snack, setSnack }}>
      {props.children}
    </SnackContext.Provider>
  );
};

export default SnackContext;