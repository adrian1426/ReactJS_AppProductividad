import { useCallback, useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import { httpOk, userSelected } from '../../../constants/CommonContants';
import { getTasksByUserId } from '../../../services/TaskService';
import Loader from '../../commons/Loader';
import BarChartReport from '../../commons/BarChartReport';
import Searcher from '../../commons/Searcher';
import { trasnformData } from './TaskReportContainer.util';

const TaskReportContainer = () => {
  const [tareas, setTareas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const user = JSON.parse(localStorage.getItem(userSelected));

  const _getTasksByUserId = useCallback(async () => {
    setIsLoading(true);
    const response = await getTasksByUserId(user?._id, { titulo: '', idStatus: 0, idTiempo: 0 });

    if (response.status === httpOk) {
      const data = await response.json();
      const newData = trasnformData(data);
      setTareas(newData);
      setIsLoading(false);
    } else {
      setTareas([]);
      setIsLoading(false);
    }
  }, [user?._id]);

  useEffect(() => {
    _getTasksByUserId();
  }, [_getTasksByUserId]);

  return (
    <div style={{ width: '100%' }}>
      <Searcher>
        <Typography
          color='primary'
          variant='h5'
        >
          Reportes de productividad
        </Typography>
      </Searcher>

      <BarChartReport
        xAxis='Estatus de tareas'
        yAxis='Cantidad de tareas'
        data={tareas}
      />

      <Loader
        open={isLoading}
      />
    </div >
  );
};

export default TaskReportContainer;