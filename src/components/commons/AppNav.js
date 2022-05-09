import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { Button, Typography } from '@mui/material';
import { userSelected } from '../../constants/CommonContants';
import NavLinkActive from './NavLinkActive';
import { useAuth } from '../../hooks/useAuth';
import { TASK_LIST_PAGE, TASK_REPORT_PAGE } from '../../constants/RoutesConstants';
import styles from './AppNav.module.css';

const AppNav = () => {
  const { logout } = useAuth();
  const user = JSON.parse(localStorage.getItem(userSelected))

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <div className={styles.nav}>
            <div className={styles.nav_menu}>
              <Typography
                className={styles.nav_menu_user}
                sx={{ display: { xs: 'none', md: 'flex' } }}
              >
                {user?.nombre} {user?.apellido}
              </Typography>

              <NavLinkActive to={TASK_LIST_PAGE}>
                Lista de Tareas
              </NavLinkActive>

              <NavLinkActive to={TASK_REPORT_PAGE}>
                Reporte Productividad
              </NavLinkActive>
            </div>

            <Button
              color="secondary"
              variant="contained"
              className={styles.nav_menu_salir}
              onClick={logout}
            >
              Salir
            </Button>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default AppNav;
