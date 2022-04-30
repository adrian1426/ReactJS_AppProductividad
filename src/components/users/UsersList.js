import { Typography } from '@mui/material';
import PropTypes from 'prop-types';
import Container from '../commons/Container';
import Li from '../commons/Li';

const UsersList = props => {
  const { users } = props;

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
                onClick={() => console.log(user)}
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