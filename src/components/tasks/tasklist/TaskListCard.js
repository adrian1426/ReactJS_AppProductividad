import styled from "@emotion/styled";
import { TextField } from "@mui/material";
import { convertHMS } from "../../../helpers";
import styles from './TaskListCard.module.css';
import TaskListCardControls from "./TaskListCardControls";
import TaskListCardInfo from "./TaskListCardInfo";

const CardContent = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.common.black,
  padding: '6px',
  width: '300px',
  margin: '5px',
  borderRadius: '5px'
}));

const TaskListCard = props => {
  const { tarea } = props;

  const timeShow = tarea.estatus.id === 1 ? convertHMS(tarea.tiempo.programado) : convertHMS(tarea.tiempo.actual);
  const colorBoder = tarea.estatus.id === 1 ? '#00A6FF' : tarea.estatus.id === 2 ? '#FF8C32' : '#4CA22A';

  return (
    <CardContent
      style={{ border: `1px solid ${colorBoder}` }}
    >
      <h3 className={styles.card_titulo}>
        {tarea.titulo}
      </h3>
      <hr />

      <div className={styles.card_time}>
        <label style={{ color: colorBoder }}>
          Tarea <strong>{tarea.estatus.descripcion}</strong>
        </label>
        <label ><strong>{timeShow}</strong></label>
      </div>

      <TextField
        className={styles.card_details}
        multiline
        maxRows={4}
        defaultValue={tarea.descripcion}
        disabled
        fullWidth
      />

      <TaskListCardInfo tarea={tarea} />
      <TaskListCardControls tarea={tarea} />
    </CardContent>
  );
};

export default TaskListCard;