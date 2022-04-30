import { useState, useEffect } from 'react';
import { httpOk } from '../../constants/CommonContants';
import { getUsers } from '../../services/UserService';
import Loader from '../commons/Loader';
import UsersList from './UsersList';
import UsersListHeader from './UsersListHeader';

const UsersListContainer = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const _getUsers = async () => {
    setLoading(true);
    const response = await getUsers();

    if (response.status === httpOk) {
      const data = await response.json();
      setUsers(data);
      setLoading(false);
    } else {
      setUsers([]);
      setLoading(false);
    }
  };

  useEffect(() => {
    _getUsers();
  }, []);

  return (
    <>
      <UsersListHeader />
      <UsersList users={users} />
      <Loader open={loading} />
    </>
  );
};

export default UsersListContainer;