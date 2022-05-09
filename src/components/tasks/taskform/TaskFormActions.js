import PropTypes from 'prop-types';
import { Button } from "@mui/material";
import styles from './TaskFormActions.module.css';

const TaskFormActions = props => {
  const { handleClose, handleAddTarea } = props;

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
        onClick={handleAddTarea}
      >
        Guardar
      </Button>
    </div>
  );
};

TaskFormActions.propTypes = {
  handleClose: PropTypes.func.isRequired,
  handleAddTarea: PropTypes.func.isRequired
};

export default TaskFormActions;