import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { TASK_LIST_PAGE, TASK_REPORT_PAGE } from '../constants/RoutesConstants';
import Loader from '../components/commons/Loader';

const TaskListPage = lazy(() => import('../pages/TaskListPage'));
const TaskReportPage = lazy(() => import('../pages/TaskReportPage'));

const RouterApp = () => {
  return (
    <Suspense fallback={<Loader open={true} />}>
      <Routes>
        <Route path={TASK_LIST_PAGE} element={<TaskListPage />} />
        <Route path={TASK_REPORT_PAGE} element={<TaskReportPage />} />
      </Routes>
    </Suspense>
  );
};

export default RouterApp;