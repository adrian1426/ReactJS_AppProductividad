import { useEffect, useState, useContext, useCallback } from 'react';
import TaskList from './TaskList';
import TaskListSearcher from './TaskListSearcher';
import { getTasksByUserId } from '../../../services/TaskService';
import { httpOk, userSelected } from '../../../constants/CommonContants';
import UserContext from '../../../context/UserContext';
import { addUserAction } from '../../../context/user/userAction';


const TaskListContainer = () => {
  const [tareas, setTareas] = useState([]);
  const user = JSON.parse(localStorage.getItem(userSelected));
  const { state, dispatch } = useContext(UserContext);

  const _getTasksByUserId = useCallback(async () => {
    const response = await getTasksByUserId(user?._id, { titulo: '', idStatus: 0, idTiempo: 0 });

    if (response.status === httpOk) {
      const data = await response.json();
      setTareas(data);
    } else {
      setTareas([]);
    }
  }, [user?._id]);

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
      <TaskListSearcher />
      <TaskList />
    </div>
  );
};

export default TaskListContainer;