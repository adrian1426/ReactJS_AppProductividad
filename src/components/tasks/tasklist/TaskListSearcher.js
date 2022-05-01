import styled from '@emotion/styled';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { IconButton, TextField } from '@mui/material';
import React from 'react';
import { statusTarea, timeTask } from '../../../constants/FilterConstants';
import SelectCustom from '../../commons/SelectCustom';

const Searcher = styled('div')(({ theme }) => ({
  background: theme.palette.common.white,
  margin: '2%',
  padding: '10px',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center'
}));

const TaskListSearcher = () => {
  return (
    <Searcher>
      <TextField
        label="Buscar tarea"
        variant="outlined"
        size='small'
      />

      <SelectCustom
        label='Filtrar estatus tareas'
        data={statusTarea}
      />

      <SelectCustom
        label='Filtrar por tiempo'
        data={timeTask}
      />

      <IconButton
        color="primary"
        component="span"
      >
        <AddCircleIcon
          fontSize='large'
        />
      </IconButton>
    </Searcher>
  );
};

export default TaskListSearcher;