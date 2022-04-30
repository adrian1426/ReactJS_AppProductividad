import { addUser } from './userType';

export const addUserAction = payload => ({
  type: addUser,
  payload
});