import { TextField } from '@mui/material';
import React from 'react';
import DialogCommon from '../../commons/DialogCommon';
import TaskFormActions from './TaskFormActions';
import styles from './TaskForm.module.css';
import SelectCustom from '../../commons/SelectCustom';
import { formTime } from '../../../constants/FilterConstants';

const TaskForm = (props) => {
  const { open, handleClose } = props;

  const _handleClose = () => {
    handleClose();
  };

  return (
    <DialogCommon
      title='Agregar Tarea'
      open={open}
      handleClose={_handleClose}
      actions={
        <TaskFormActions
          handleClose={handleClose}
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
        />

        <TextField
          label="Agregar descripción de tarea"
          multiline
          maxRows={4}
          fullWidth
          className={styles.form_text}
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
          />
        </div>
      </div>
    </DialogCommon>
  );
};

export default TaskForm;