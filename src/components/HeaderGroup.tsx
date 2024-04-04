import { useShow } from "../hooks/useShow";
import UserAdd from "./UserAdd";
import UserSearch from "./UserSearch";
import Button from "./layout/Button";

const HeaderGroup = () => {
  const { visible, handleOpen, handleClose } = useShow({ defaultState: false });

  return (
    <>
      <UserAdd show={visible} handleClose={handleClose} />
      <h1 className="text-3xl text-center font-medium">GOQII - User List</h1>
      <div className="flex gap-x-4">
        <UserSearch />
        <Button
          title="Add User"
          type="button"
          className="w-32 h-10 bg-orange-500 rounded-md text-white font-medium hover:bg-orange-600 active:bg-orange-600"
          onClick={handleOpen}
        >
          Add User
        </Button>
      </div>
    </>
  );
};

export default HeaderGroup;
