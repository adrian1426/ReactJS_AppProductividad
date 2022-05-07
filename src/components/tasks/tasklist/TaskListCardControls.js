import { useContext } from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonGroup } from '@mui/material';
import { httpOk } from '../../../constants/CommonContants';
import { deleteTareaById } from '../../../services/TaskService';
import SnackContext from '../../../context/SnackContext';
import styles from './TaskListCardControls.module.css';

const TaskListCardControls = props => {
  const { tarea, getTasksService, handleTareaEdit } = props;
  const { setSnack } = useContext(SnackContext);

  const _deleteTareaById = async () => {
    const response = await deleteTareaById(tarea._id);

    if (response.status === httpOk) {
      getTasksService();
      setSnack({ open: true, severity: 'info', msg: '¡Tarea eliminada correctamente!' });
    } else {
      setSnack({ open: true, severity: 'error', msg: `¡Error al eliminar tarea! - ${response?.text}` });
    }
  };

  const _handleTareaEdit = () => {
    handleTareaEdit(tarea);
  };

  const lblBtnPrimary = tarea.estatus.id === 1 ? 'Iniciar' :
    tarea.estatus.id === 2 ? 'Terminar' : 'Eliminar';

  const funBtnPrimary = tarea.estatus.id === 1 ? () => console.log('Iniciar') :
    tarea.estatus.id === 2 ? () => console.log('Terminar') : _deleteTareaById;

  return (
    <div>
      <div className={styles.controls_group}>
        <ButtonGroup variant="outlined">
          <Button
            onClick={_handleTareaEdit}
          >
            Editar
          </Button>
          {
            tarea.estatus.id === 2 && (
              <Button>Reiniciar</Button>
            )
          }
          {
            tarea.estatus.id !== 3 && (
              <Button onClick={_deleteTareaById}>
                Eliminar
              </Button>
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
          onClick={funBtnPrimary}
        >
          {lblBtnPrimary}
        </Button>
      </div>
    </div>
  );
};

TaskListCardControls.propTypes = {
  tarea: PropTypes.object.isRequired
};

export default TaskListCardControls;