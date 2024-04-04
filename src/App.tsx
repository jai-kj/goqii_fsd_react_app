import HeaderGroup from "./components/HeaderGroup";
import Alert from "./components/layout/Alert";
import UserList from "./components/UserList";
import { ContextProvider } from "./context/context";

const App = () => {
  return (
    <ContextProvider>
      <Alert />
      <div className="w-full h-full bg-slate-700 py-4 px-4">
        <div className="h-full w-full flex flex-col max-w-7xl mx-auto text-white gap-y-6">
          <HeaderGroup />
          <UserList />
        </div>
      </div>
    </ContextProvider>
  );
};

export default App;
