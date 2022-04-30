import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import styles from './UsersListHeader.module.css';

const Header = styled('header')(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  padding: '5px',
  height: '40px'
}));

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