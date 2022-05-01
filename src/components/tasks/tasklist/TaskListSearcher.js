import { PhotoCamera } from '@mui/icons-material';
import { IconButton, TextField } from '@mui/material';
import React from 'react';
import { statusTarea, timeTask } from '../../../constants/FilterConstants';
import SelectCustom from '../../commons/SelectCustom';

const TaskListSearcher = () => {
  return (
    <div style={{
      margin: '2%',
      padding: '10px',
      background: '#EEEEEE',
      display: 'flex'
    }}>
      <TextField
        label="Buscar tarea"
        variant="outlined"
        size='small'
      />

      <SelectCustom
        label='Filtrar tareas'
        data={statusTarea}
      />

      <SelectCustom
        label='Filtrar por tiempo'
        data={timeTask}
      />

      <IconButton color="primary" aria-label="upload picture" component="span">
        <PhotoCamera />
      </IconButton>
    </div>
  );
};

export default TaskListSearcher;