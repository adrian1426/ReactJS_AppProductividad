import { Button, ButtonGroup } from '@mui/material';
import styles from './TaskListCardControls.module.css';

const TaskListCardControls = () => {
  return (
    <div>
      <div className={styles.controls_group}>
        <ButtonGroup variant="outlined">
          <Button>Editar</Button>
          <Button>Reiniciar</Button>
          <Button>Eliminar</Button>
        </ButtonGroup>
      </div>

      <div className={styles.controls_group2}>
        <Button
          variant='contained'
          color='secondary'
          fullWidth
          className={styles.controls_button}
        >
          Detener
        </Button>

        <Button
          className={styles.controls_button}
          variant='contained'
          fullWidth
        >
          Terminar
        </Button>
      </div>
    </div>
  );
};

export default TaskListCardControls;