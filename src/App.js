import UsersListContainer from "./components/users/UsersListContainer";
import { useAuth } from './hooks/useAuth';

function App() {
  const isLogged = useAuth();

  if (!isLogged) {
    return <UsersListContainer />;
  }

  return (
    <div>
      Lista de tareas
    </div>
  );
}

export default App;
