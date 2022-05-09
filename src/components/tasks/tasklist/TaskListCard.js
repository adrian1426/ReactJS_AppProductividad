import { TextField } from "@mui/material";
import { convertHMS } from "../../../helpers";
import styles from './TaskListCard.module.css';
import TaskListCardControls from "./TaskListCardControls";
import TaskListCardInfo from "./TaskListCardInfo";
import PropTypes from 'prop-types';
import CardContent from "../../commons/styled/CardContent";

const TaskListCard = props => {
  const { tarea, getTasksService, handleTareaEdit } = props;

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
        value={tarea.descripcion}
        disabled
        fullWidth
      />

      <TaskListCardInfo tarea={tarea} />
      <TaskListCardControls
        tarea={tarea}
        getTasksService={getTasksService}
        handleTareaEdit={handleTareaEdit}
      />
    </CardContent>
  );
};

TaskListCard.propTypes = {
  tarea: PropTypes.object.isRequired,
  getTasksService: PropTypes.func.isRequired,
  handleTareaEdit: PropTypes.func.isRequired
};

export default TaskListCard;