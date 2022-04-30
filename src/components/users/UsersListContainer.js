import { useState, useEffect } from 'react';
import { httpOk } from '../../constants/CommonContants';
import { getUsers } from '../../services/UserService';
import UsersList from './UsersList';
import UsersListHeader from './UsersListHeader';

const UsersListContainer = () => {
  const [users, setUsers] = useState([]);

  const _getUsers = async () => {
    const response = await getUsers();

    if (response.status === httpOk) {
      const data = await response.json();
      setUsers(data);
    } else {
      setUsers([])
    }
  };

  useEffect(() => {
    _getUsers();
  }, []);

  return (
    <>
      <UsersListHeader />
      <UsersList users={users} />
    </>
  );
};

export default UsersListContainer;