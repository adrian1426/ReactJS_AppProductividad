import { convertHMS } from '../../../helpers';
import styles from './TaskListCardInfo.module.css';

const TaskListCardInfo = props => {
  const { tarea } = props;

  return (
    <div className={styles.card_info}>
      <label>Tiempo Programado {convertHMS(tarea.tiempo.programado)}</label>
      <label>Tiempo Transcurrido {convertHMS(tarea.tiempo.transcurrido)}</label>
    </div>
  );
};

export default TaskListCardInfo;