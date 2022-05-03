import React from 'react';
import DialogCommon from '../../commons/DialogCommon';
import TaskFormActions from './TaskFormActions';

const TaskForm = (props) => {
  const { open, handleClose } = props;
  return (
    <DialogCommon
      title='Agregar Tarea'
      open={open}
      handleClose={handleClose}
      actions={<TaskFormActions />}
    >
      <h1>contenido</h1>
    </DialogCommon>
  );
};

export default TaskForm;