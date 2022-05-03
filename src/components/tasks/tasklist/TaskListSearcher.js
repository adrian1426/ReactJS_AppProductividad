import styled from '@emotion/styled';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { IconButton, TextField } from '@mui/material';
import React from 'react';
import { statusTarea, timeTask } from '../../../constants/FilterConstants';
import SelectCustom from '../../commons/SelectCustom';
import debounce from "just-debounce-it";
import PropTypes from 'prop-types';

const Searcher = styled('div')(({ theme }) => ({
  background: theme.palette.common.white,
  margin: '2%',
  padding: '10px',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center'
}));

const TaskListSearcher = (props) => {
  const { setSearchTitle, setSearchStatus, setSearchTime } = props;

  const handleChangeTarea = debounce((e) => {
    setSearchTitle(e.target.value);
  }, 500);

  const handleChangeStatus = e => {
    setSearchStatus(e.target.value);
  };

  const handleChangeTime = e => {
    setSearchTime(e.target.value);
  };

  return (
    <Searcher>
      <TextField
        label="Buscar tarea"
        variant="outlined"
        size='small'
        onChange={handleChangeTarea}
      />

      <SelectCustom
        label='Filtrar estatus tareas'
        data={statusTarea}
        onChange={handleChangeStatus}
      />

      <SelectCustom
        label='Filtrar por tiempo'
        data={timeTask}
        onChange={handleChangeTime}
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

TaskListSearcher.propTypes = {
  setSearchTitle: PropTypes.func.isRequired,
  setSearchStatus: PropTypes.func.isRequired,
  setSearchTime: PropTypes.func.isRequired
};

export default TaskListSearcher;