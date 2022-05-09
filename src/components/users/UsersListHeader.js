import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import { Typography } from '@mui/material';
import styles from './UsersListHeader.module.css';
import Header from '../commons/styled/Header';

const UsersListHeader = () => {
  return (
    <Header
    >
      <div className={styles['header-data']}>
        <AssignmentTurnedInIcon
          fontSize='large'
          color='primary'
        />
        <Typography
          variant='h4'
          color='primary'
        >
          App de Productividad
        </Typography>
      </div>
    </Header>
  );
};

export default UsersListHeader;