import { Typography } from '@mui/material';
import PropTypes from 'prop-types';
import Container from '../commons/Container';

const UsersList = props => {
  const { users } = props;

  return (
    <Container>
      <div>
        <Typography
        >
          Seleccione su usuario para iniciar sus actividades
        </Typography>

        <ul>
          {
            users.map(user => (
              <li
                key={user._id}
              >
                {`${user.nombre} ${user.apellido}`}
              </li>
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