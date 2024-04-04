import HeaderGroup from "./components/HeaderGroup";
import UserList from "./components/UserList";

const App = () => {
  return (
    <div className="w-full h-full bg-slate-700 py-4 px-4 sm:px-0">
      <div className="h-full w-full flex flex-col max-w-7xl mx-auto text-white gap-y-6">
        <HeaderGroup />
        <UserList />
      </div>
    </div>
  );
};

export default App;
