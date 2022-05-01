import { addUser, removeUser } from './userType';
import { initialState } from './userInitialState';

const userReducer = (state, action) => {
  switch (action.type) {
    case addUser:
      return {
        ...action.payload
      };
    case removeUser:
      return initialState;
    default:
      return state;
  }
};

export default userReducer;