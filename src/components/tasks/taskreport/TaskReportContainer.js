import { useCallback, useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { BarChart } from 'react-d3-chart-graphs'
import { httpOk, userSelected } from '../../../constants/CommonContants';
import { getTasksByUserId } from '../../../services/TaskService';
import Loader from '../../commons/Loader';

const axesProps = {
  legend: {
    xAxis: 'Estatus de tareas',
    yAxis: 'Cantidad de tareas',
  },
  padding: {
    xAxis: 5,
    yAxis: 5,
  },
  ticksCount: 1,
  tickFormat: {
    xAxis: function (value) {
      return `${value}`;
    },
  },
};

const colorScale = {
  min: '#BBB',
  max: '#AAA',
};

const Searcher = styled('div')(({ theme }) => ({
  background: theme.palette.common.white,
  margin: '2%',
  padding: '10px',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center'
}));

const TaskReportContainer = () => {
  const [tareas, setTareas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const user = JSON.parse(localStorage.getItem(userSelected));

  const trasnformData = (data) => {
    const programado = data.filter(d => d.estatus.id === 1).length;
    const proceso = data.filter(d => d.estatus.id === 2).length;
    const finalizado = data.filter(d => d.estatus.id === 3).length;

    const newData = [
      { title: 'Programado', value: programado },
      { title: 'En Proceso', value: proceso },
      { title: 'Finalizado', value: finalizado }
    ];

    return newData;
  };

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

      <BarChart
        axesProps={axesProps}
        data={tareas}
        colorScale={colorScale}
        paddingMultiplier={0.24}
      />

      <Loader
        open={isLoading}
      />
    </div >
  );
};

export default TaskReportContainer;