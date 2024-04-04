import UserSearch from "./UserSearch";
import Button from "./layout/Button";

const HeaderGroup = () => {
  return (
    <>
      <h1 className="text-3xl text-center font-medium">GOQII - User List</h1>
      <div className="flex gap-x-6">
        <UserSearch />
        <Button
          title="Add User"
          type="button"
          className="w-32 h-10 bg-orange-500 rounded-md text-white font-medium hover:bg-orange-600 active:bg-orange-600"
        >
          Add User
        </Button>
      </div>
    </>
  );
};

export default HeaderGroup;
