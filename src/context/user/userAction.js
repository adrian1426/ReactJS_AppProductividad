import { addUser, removeUser } from './userType';

export const addUserAction = payload => ({
  type: addUser,
  payload
});

export const removeUserAction = () => ({
  type: removeUser
});