import { useState, useContext, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';
import DialogCommon from '../../commons/DialogCommon';
import TaskFormActions from './TaskFormActions';
import styles from './TaskForm.module.css';
import SelectCustom from '../../commons/SelectCustom';
import { formTime } from '../../../constants/FilterConstants';
import UserContext from '../../../context/UserContext';
import { addTarea, updateTareaById } from '../../../services/TaskService';
import { httpCreated, httpOk } from '../../../constants/CommonContants';
import { initialState, initialStateErr, _objTarea, _objTareaEdit } from './TaskForm.util';
import SnackContext from '../../../context/SnackContext';

const TaskForm = (props) => {
  const { open, handleClose, getTasksService, tareaEdit } = props;
  const [tarea, setTarea] = useState(initialState);
  const [errors, setErrors] = useState(initialStateErr);
  const { state } = useContext(UserContext);
  const { setSnack } = useContext(SnackContext);
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

  const handleChangeSelectTime = e => {
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
      setSnack({ open: true, severity: 'success', msg: '¡Tarea agregada correctamente!' });
    } else {
      setSnack({ open: true, severity: 'error', msg: `¡Error al agregar tarea! - ${response?.text}` });
    }
  };

  const _editTarea = async (tareaValue) => {
    const response = await updateTareaById(tareaEdit._id, tareaValue);

    if (response.status === httpOk) {
      _handleClose();
      getTasksService();
      setSnack({ open: true, severity: 'info', msg: '¡Tarea actualizada correctamente!' });
    } else {
      setSnack({ open: true, severity: 'error', msg: `¡Error al editar tarea! - ${response?.text}` });
    }
  };

  const handleAddTarea = () => {
    const objTarea = tareaEdit ? _objTareaEdit(tarea, tareaEdit) : _objTarea(tarea, state);

    if (tarea.title && tarea.description && (tarea.time > 0 && tarea.time <= 120)) {
      const funForm = tareaEdit ? () => _editTarea(objTarea) : () => _addTarea(objTarea);
      funForm();
    } else {
      setErrors({
        title: tarea.title ? false : true,
        description: tarea.description ? false : true,
        time: (tarea.time > 0 && tarea.time <= 120) ? false : true
      });
    }
  };

  const titleForm = tareaEdit ? 'Editar Tarea' : 'Agregar Tarea';

  useEffect(() => {
    if (tareaEdit) {
      const newT = {
        title: tareaEdit.titulo,
        description: tareaEdit.descripcion,
        time: tareaEdit.tiempo.programado / 60
      };
      setTarea(newT);
    }
  }, [tareaEdit]);

  return (
    <DialogCommon
      title={titleForm}
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
          disabled={tareaEdit ? true : false}
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
            onChange={handleChangeSelectTime}
            style={{ width: '100%' }}
            disabled={tareaEdit?.estatus?.id > 1 ? true : false}
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
            disabled={tareaEdit?.estatus?.id > 1 ? true : false}
          />
        </div>
      </div>
    </DialogCommon>
  );
};

TaskForm.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  getTasksService: PropTypes.func.isRequired,
  tareaEdit: PropTypes.object
};

export default TaskForm;