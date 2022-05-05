import { Button } from "@mui/material";
import styles from './TaskFormActions.module.css';

const TaskFormActions = props => {
  const { handleClose } = props;

  return (
    <div className={styles.actions}>
      <Button
        variant='contained'
        color='secondary'
        fullWidth
        className={styles.actions_button}
        onClick={handleClose}
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