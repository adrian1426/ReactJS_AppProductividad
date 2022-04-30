import { useState, useEffect } from 'react';
import { getUsers } from '../../services/UserService';
import UsersListHeader from './UsersListHeader';

const UsersListContainer = () => {
  const [users, setUsers] = useState([]);

  const _getUsers = async () => {
    const response = await getUsers();
    // const data = await response.json();

    console.log(response);
  };

  useEffect(() => {
    _getUsers();
  }, []);

  return (
    <div>
      <UsersListHeader />
    </div>
  );
};

export default UsersListContainer;