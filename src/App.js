import UsersListContainer from "./components/users/UsersListContainer";
import { useAuth } from './hooks/useAuth';
import RouterApp from "./router/RouterApp";

function App() {
  const isLogged = useAuth();

  if (!isLogged) {
    return <UsersListContainer />;
  }

  return (
    <div>
      <RouterApp />
    </div>
  );
}

export default App;
