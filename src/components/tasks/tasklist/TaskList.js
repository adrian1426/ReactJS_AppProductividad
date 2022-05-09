import TaskListCard from "./TaskListCard";
import PropTypes from 'prop-types';
import ContainerCards from "../../commons/styled/ContainerCards";

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
  tareas: PropTypes.array.isRequired,
  getTasksService: PropTypes.func.isRequired,
  handleTareaEdit: PropTypes.func.isRequired
};

export default TaskList;