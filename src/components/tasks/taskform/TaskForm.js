import { useState, useContext, useRef } from 'react';
import { TextField } from '@mui/material';
import DialogCommon from '../../commons/DialogCommon';
import TaskFormActions from './TaskFormActions';
import styles from './TaskForm.module.css';
import SelectCustom from '../../commons/SelectCustom';
import { formTime } from '../../../constants/FilterConstants';
import UserContext from '../../../context/UserContext';
import { addTarea } from '../../../services/TaskService';
import { httpCreated } from '../../../constants/CommonContants';
import { initialState, initialStateErr, _objTarea } from './TaskForm.util';

const TaskForm = (props) => {
  const { open, handleClose, getTasksService } = props;
  const [tarea, setTarea] = useState(initialState);
  const [errors, setErrors] = useState(initialStateErr);
  const { state } = useContext(UserContext);
  const timeTextRef = useRef();

  const _handleClose = () => {
    handleClose();
    setTarea(initialState);
    setErrors(initialStateErr);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setTarea({
      ...tarea,
      [name]: value
    });
  };

  const handlechangeSelectTime = e => {
    setTarea({
      ...tarea,
      time: (e.target.value / 60)
    });

    if (e.target.value !== 0) {
      timeTextRef.current.disabled = true;
    } else {
      timeTextRef.current.disabled = false;
    }
  };

  const _addTarea = async (tareaValue) => {
    const response = await addTarea(tareaValue);

    if (response.status === httpCreated) {
      _handleClose();
      getTasksService();
    } else {
      console.log('Error al agregar nueva tarea: ', response);
    }
  };

  const handleAddTarea = () => {
    const objTarea = _objTarea(tarea, state);

    if (tarea.title && tarea.description && (tarea.time > 0 && tarea.time <= 120)) {
      _addTarea(objTarea);
    } else {
      setErrors({
        title: tarea.title ? false : true,
        description: tarea.description ? false : true,
        time: (tarea.time > 0 && tarea.time <= 120) ? false : true
      });
    }
  };

  return (
    <DialogCommon
      title='Agregar Tarea'
      open={open}
      handleClose={_handleClose}
      actions={
        <TaskFormActions
          handleClose={_handleClose}
          handleAddTarea={handleAddTarea}
        />
      }
    >
      <div>
        <TextField
          label="Titulo de tarea"
          variant="outlined"
          size='small'
          fullWidth
          className={styles.form_text}
          value={tarea.title}
          onChange={handleChange}
          name='title'
          error={errors.title}
        />

        <TextField
          label="Agregar descripción de tarea"
          multiline
          maxRows={4}
          fullWidth
          className={styles.form_text}
          value={tarea.description}
          onChange={handleChange}
          name='description'
          error={errors.description}
        />

        <small style={{ color: '#BBB' }}>
          El tiempo máximo permitido es de 120 minutos
        </small>

        <div className={styles.form_timer}>
          <SelectCustom
            label='Agregar tiempo'
            data={formTime}
            onChange={handlechangeSelectTime}
            style={{
              width: '100%'
            }}
          />

          <TextField
            label='Minutos'
            fullWidth
            size='small'
            type='number'
            value={tarea.time}
            onChange={handleChange}
            name='time'
            inputRef={timeTextRef}
            error={errors.time}
          />
        </div>
      </div>
    </DialogCommon>
  );
};

export default TaskForm;