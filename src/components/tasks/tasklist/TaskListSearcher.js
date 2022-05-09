import AddCircleIcon from '@mui/icons-material/AddCircle';
import { IconButton, TextField, Tooltip } from '@mui/material';
import React from 'react';
import { statusTarea, timeTask } from '../../../constants/FilterConstants';
import SelectCustom from '../../commons/SelectCustom';
import debounce from "just-debounce-it";
import PropTypes from 'prop-types';
import Searcher from '../../commons/styled/Searcher';

const TaskListSearcher = (props) => {
  const { setSearchTitle, setSearchStatus, setSearchTime, setOpenDialog } = props;

  const handleChangeTarea = debounce((e) => {
    setSearchTitle(e.target.value);
  }, 500);

  const handleChangeStatus = e => {
    setSearchStatus(e.target.value);
  };

  const handleChangeTime = e => {
    setSearchTime(e.target.value);
  };

  const addTask = () => {
    setOpenDialog(true);
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

      <Tooltip title="Agregar tarea">
        <IconButton
          color="primary"
          component="span"
          onClick={addTask}
        >
          <AddCircleIcon
            fontSize='large'
          />
        </IconButton>
      </Tooltip>
    </Searcher>
  );
};

TaskListSearcher.propTypes = {
  setSearchTitle: PropTypes.func.isRequired,
  setSearchStatus: PropTypes.func.isRequired,
  setSearchTime: PropTypes.func.isRequired,
  setOpenDialog: PropTypes.func.isRequired
};

export default TaskListSearcher;