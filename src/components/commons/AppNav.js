import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { Button, Typography } from '@mui/material';
import { userSelected } from '../../constants/CommonContants';
import NavLinkActive from './NavLinkActive';
import { TASK_LIST_PAGE, TASK_REPORT_PAGE } from '../../constants/RoutesConstants';

const AppNav = () => {
  const user = JSON.parse(localStorage.getItem(userSelected))

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <div style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div style={{ display: 'flex' }}>
              <Typography
                style={{
                  fontWeight: 'bold',
                  marginRight: '10px'
                }}
              >
                {user.nombre} {user.apellido}
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
