import { useUIDispatch } from "../context/context";
import EditPencil from "./icons/EditPencil";
import Trash from "./icons/Trash";
import Button from "./layout/Button";

interface IUserItemActionProps {
  id: string;
  handleEditOpen: () => void;
  handleDeleteOpen: () => void;
}

const UserItemAction = ({
  id,
  handleEditOpen,
  handleDeleteOpen,
}: IUserItemActionProps) => {
  const { setSelectedUser } = useUIDispatch();

  const handleEdit = () => {
    setSelectedUser(id);
    handleEditOpen();
  };

  const handleDelete = () => {
    setSelectedUser(id);
    handleDeleteOpen();
  };

  return (
    <div className="absolute right-2 top-2 lg:top-1/2 lg:-translate-y-1/2 flex gap-x-2 lg:invisible lg:group-hover:visible">
      <Button
        title="Edit User"
        type="button"
        className="bg-purple-700 rounded-md p-1.5 hover:bg-purple-500"
        onClick={handleEdit}
      >
        <EditPencil />
      </Button>
      <Button
        title="Delete User"
        type="button"
        className="bg-red-500 rounded-md p-1.5 hover:bg-red-600"
        onClick={handleDelete}
      >
        <Trash />
      </Button>
    </div>
  );
};

export default UserItemAction;
