import ContainerTasks from "../components/commons/styled/ContainerTasks";
import TaskListContainer from "../components/tasks/tasklist/TaskListContainer";

const TaskListPage = () => {
  return (
    <ContainerTasks>
      <TaskListContainer />
    </ContainerTasks>
  );
};

export default TaskListPage;