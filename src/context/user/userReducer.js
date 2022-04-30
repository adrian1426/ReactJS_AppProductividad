import { addUser, removeUser } from './userType';

const userReducer = (state, action) => {
  switch (action.type) {
    case addUser:
      return {
        ...action.payload
      };
    case removeUser:
      return {};
    default:
      return state;
  }
};

export default userReducer;