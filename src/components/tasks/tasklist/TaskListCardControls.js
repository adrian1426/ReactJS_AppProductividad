import { Button, ButtonGroup } from '@mui/material';
import styles from './TaskListCardControls.module.css';

const TaskListCardControls = props => {
  const { tarea } = props;

  const lblBtnPrimary = tarea.estatus.id === 1 ? 'Iniciar' :
    tarea.estatus.id === 2 ? 'Terminar' : 'Eliminar';

  return (
    <div>
      <div className={styles.controls_group}>
        <ButtonGroup variant="outlined">
          <Button>Editar</Button>
          {
            tarea.estatus.id === 2 && (
              <Button>Reiniciar</Button>
            )
          }
          {
            tarea.estatus.id !== 3 && (
              <Button>Eliminar</Button>
            )
          }
        </ButtonGroup>
      </div>

      <div className={styles.controls_group2}>
        {
          tarea.estatus.id === 2 && (
            <Button
              variant='contained'
              color='secondary'
              fullWidth
              className={styles.controls_button}
            >
              Detener
            </Button>
          )
        }

        <Button
          className={styles.controls_button}
          variant='contained'
          fullWidth
        >
          {lblBtnPrimary}
        </Button>
      </div>
    </div>
  );
};

export default TaskListCardControls;