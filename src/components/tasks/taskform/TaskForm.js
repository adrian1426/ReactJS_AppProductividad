import { useState, useContext } from 'react';
import { TextField } from '@mui/material';
import DialogCommon from '../../commons/DialogCommon';
import TaskFormActions from './TaskFormActions';
import styles from './TaskForm.module.css';
import SelectCustom from '../../commons/SelectCustom';
import { formTime } from '../../../constants/FilterConstants';
import UserContext from '../../../context/UserContext';
import { addTarea } from '../../../services/TaskService';
import { httpCreated } from '../../../constants/CommonContants';

const initialState = {
  title: '',
  description: '',
  time: 0
};

const TaskForm = (props) => {
  const [tarea, setTarea] = useState(initialState);
  const { state } = useContext(UserContext);
  const { open, handleClose, getTasksService } = props;

  const _handleClose = () => {
    handleClose();
    setTarea(initialState);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setTarea({
      ...tarea,
      [name]: value
    });
  };

  const _addTarea = async (tareaValue) => {
    const response = await addTarea(tareaValue);

    if (response.status === httpCreated) {
      const data = await response.json();
      _handleClose();
      getTasksService();
      console.log(data);
    } else {
      console.log('Error al agregar nueva tarea: ', response);
    }
  };

  const handleAddTarea = () => {
    const objTarea = {
      titulo: tarea.title,
      descripcion: tarea.description,
      estatus: {
        id: 1,
        descripcion: 'Programado'
      },
      tiempo: {
        programado: tarea.time * 60,
        transcurrido: 0,
        actual: 0
      },
      usuario: state._id
    };

    _addTarea(objTarea);
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
        />

        <div className={styles.form_timer}>
          <SelectCustom
            label='Agregar tiempo'
            data={formTime}
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
          />
        </div>
      </div>
    </DialogCommon>
  );
};

export default TaskForm;