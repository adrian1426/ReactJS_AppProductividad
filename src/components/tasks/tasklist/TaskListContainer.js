import { useEffect, useState, useContext, useCallback } from 'react';
import TaskList from './TaskList';
import TaskListSearcher from './TaskListSearcher';
import { getTasksByUserId } from '../../../services/TaskService';
import { httpOk, userSelected } from '../../../constants/CommonContants';
import UserContext from '../../../context/UserContext';
import { addUserAction } from '../../../context/user/userAction';
import Loader from '../../commons/Loader';


const TaskListContainer = () => {
  const [tareas, setTareas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTitle, setSearchTitle] = useState('');
  const [searchStatus, setSearchStatus] = useState(0);
  const [searchTime, setSearchTime] = useState(0);

  const user = JSON.parse(localStorage.getItem(userSelected));
  const { state, dispatch } = useContext(UserContext);

  const _getTasksByUserId = useCallback(async () => {
    setIsLoading(true);
    const response = await getTasksByUserId(user?._id,
      { titulo: searchTitle, idStatus: searchStatus, idTiempo: searchTime }
    );

    if (response.status === httpOk) {
      const data = await response.json();
      setTareas(data);
      setIsLoading(false);
    } else {
      setTareas([]);
      setIsLoading(false);
    }
  }, [user?._id, searchTitle, searchStatus, searchTime]);

  useEffect(() => {
    if (localStorage.getItem(userSelected) && state?._id === 0) {
      dispatch(addUserAction(user));
    }
  }, [state, dispatch, user]);


  useEffect(() => {
    _getTasksByUserId();
  }, [_getTasksByUserId]);

  return (
    <div style={{ width: '100%' }}>
      <TaskListSearcher
        setSearchTitle={setSearchTitle}
        setSearchStatus={setSearchStatus}
        setSearchTime={setSearchTime}
      />
      <TaskList
        tareas={tareas}
      />
      <Loader
        open={isLoading}
      />
    </div>
  );
};

export default TaskListContainer;