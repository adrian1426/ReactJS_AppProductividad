import PropTypes from 'prop-types';
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

NavLinkActive.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired
};

export default NavLinkActive;