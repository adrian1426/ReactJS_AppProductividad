import { useContext } from 'react';
import { Typography } from '@mui/material';
import PropTypes from 'prop-types';
import Container from '../commons/ContainerUserList';
import Li from '../commons/Li';
import UserContext from '../../context/UserContext';
import { userSelected } from '../../constants/CommonContants';
import { addUserAction } from '../../context/user/userAction';
import { useNavigate } from 'react-router-dom';
import { TASK_LIST_PAGE } from '../../constants/RoutesConstants';

const UsersList = props => {
  const { users } = props;
  const { dispatch } = useContext(UserContext);
  const navigate = useNavigate();

  const selectedUser = (user) => {
    dispatch(addUserAction(user));

    localStorage.setItem(userSelected, JSON.stringify(user));
    navigate(TASK_LIST_PAGE);
  };


  return (
    <Container>
      <div>
        <Typography
          variant='h5'
          color='primary'
        >
          Seleccione su usuario
        </Typography>

        <ul>
          {
            users.map(user => (
              <Li
                onClick={() => selectedUser(user)}
                key={user._id}
              >
                {`${user.nombre} ${user.apellido}`}
              </Li>
            ))
          }
        </ul>
      </div>
    </Container>
  );
};

UsersList.propTypes = {
  users: PropTypes.array
};

UsersList.defaultProps = {
  users: []
};

export default UsersList;