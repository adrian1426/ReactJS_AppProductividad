import { Button } from "@mui/material";
import styles from './TaskFormActions.module.css';

const TaskFormActions = () => {
  return (
    <div className={styles.actions}>
      <Button
        variant='contained'
        color='secondary'
        fullWidth
        className={styles.actions_button}
      >
        Cancelar
      </Button>

      <Button
        variant='contained'
        fullWidth
        className={styles.actions_button}
      >
        Guardar
      </Button>
    </div>
  );
};

export default TaskFormActions;