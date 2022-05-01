import { Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import styles from './NavLinkActive.module.css';

const NavLinkActive = (props) => {
  const { children, to } = props;

  return (
    <NavLink
      to={to}
      className={
        ({ isActive }) =>
          isActive ? `${styles.NavLink} ${styles.isActive}` :
            `${styles.NavLink}`
      }
    >
      <Typography color='secondary'>
        {children}
      </Typography>
    </NavLink>
  );
};

export default NavLinkActive;