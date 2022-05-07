import styled from "@emotion/styled";
import TaskListCard from "./TaskListCard";
import PropTypes from 'prop-types';

const ContainerCards = styled('div')(({ theme }) => ({
  background: theme.palette.common.white,
  margin: '2%',
  padding: '10px',
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap'

}));

const TaskList = props => {
  const { tareas, getTasksService, handleTareaEdit } = props;

  return (
    <ContainerCards>
      {
        tareas.map(tarea => (
          <TaskListCard
            key={tarea._id}
            tarea={tarea}
            getTasksService={getTasksService}
            handleTareaEdit={handleTareaEdit}
          />))
      }
    </ContainerCards>
  );
};

TaskList.propTypes = {
  tareas: PropTypes.array.isRequired
};

export default TaskList;