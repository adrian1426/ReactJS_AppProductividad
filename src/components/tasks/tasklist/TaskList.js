import styled from "@emotion/styled";
import TaskListCard from "./TaskListCard";

const ContainerCards = styled('div')(({ theme }) => ({
  background: theme.palette.common.white,
  margin: '2%',
  padding: '10px',
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap'

}));

const TaskList = props => {
  const { tareas } = props;

  return (
    <ContainerCards>
      {
        tareas.map(tarea => (<TaskListCard key={tarea._id} tarea={tarea} />))
      }
    </ContainerCards>
  );
};

export default TaskList;