import AppNav from "./components/commons/AppNav";
import SnackBar from "./components/commons/SnackBar";
import UsersListContainer from "./components/users/UsersListContainer";
import { SnackProvider } from "./context/SnackContext";
import { useAuth } from './hooks/useAuth';
import RouterApp from "./router/RouterApp";

function App() {
  const { isLogged } = useAuth();

  if (!isLogged) {
    return <UsersListContainer />;
  }

  return (
    <div>
      <SnackProvider>
        <AppNav />
        <RouterApp />
        <SnackBar />
      </SnackProvider>
    </div>
  );
}

export default App;
