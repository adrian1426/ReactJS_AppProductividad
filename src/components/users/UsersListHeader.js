import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import { Typography } from '@mui/material';
import styles from './UsersListHeader.module.css';

const UsersListHeader = () => {
  return (
    <header>
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
    </header>
  );
};

export default UsersListHeader;