import EditPencil from "./icons/EditPencil";
import Trash from "./icons/Trash";
import Button from "./layout/Button";

const UserItemAction = ({ id }: { id: string }) => {
  return (
    <div className="absolute right-4 top-2 md:top-1/2 md:-translate-y-1/2 flex gap-x-3 md:invisible md:group-hover:visible">
      <Button
        title="Edit User"
        type="button"
        className="bg-purple-700 rounded-md p-1.5 hover:bg-purple-500"
      >
        <EditPencil />
      </Button>
      <Button
        title="Delete User"
        type="button"
        className="bg-red-500 rounded-md p-1.5 hover:bg-red-600"
      >
        <Trash />
      </Button>
    </div>
  );
};

export default UserItemAction;
