import { useCallback, useEffect } from "react";
import { useUIDispatch, useUIState } from "../context/context";
import PopUpWrapper from "./PopUpWrapper";
import Cross from "./icons/Cross";
import Button from "./layout/Button";

interface IUserDeleteProps {
  show: boolean;
  handleClose: () => void;
}
const UserDelete = ({ show, handleClose }: IUserDeleteProps) => {
  const {
    selectedUser: { data: currentUser },
  } = useUIState();
  const { deleteUser } = useUIDispatch();

  const handleDeleteClose = useCallback(() => {
    handleClose();
  }, [handleClose]);

  useEffect(() => {
    if (!currentUser?.id) handleDeleteClose();
  }, [currentUser?.id, handleDeleteClose]);

  if (!currentUser) return <></>;

  const handleDeleteConfirm = () => {
    deleteUser({ id: currentUser.id });
    handleClose();
  };

  return (
    <PopUpWrapper
      show={show}
      handleClose={handleDeleteClose}
      wantBottomSheet={false}
    >
      <div className="flex items-center justify-center w-full relative pb-3">
        <h2 className="text-xl font-medium text-center">Delete User</h2>
        <Button
          onClick={handleClose}
          className="hover:scale-110 absolute right-0"
        >
          <Cross />
        </Button>
      </div>
      <form className="space-y-3">
        <p className="text-lg text-gray-200 md:px-3">
          Do you confirm to permanently delete the user with email:{" "}
          <span className="font-bold">{currentUser.email}</span> ?
        </p>
        <div className="flex w-full h-full">
          <div className="flex w-full h-full justify-end space-x-3">
            <Button
              className="bg-red-500 hover:bg-red-600 active:bg-red-600 h-10 rounded-md w-1/2 md:w-32"
              type="button"
              onClick={handleDeleteConfirm}
            >
              Delete
            </Button>
            <Button
              className="border border-gray-300 hover:bg-gray-300 hover:text-gray-800 h-10 rounded-md w-1/2 md:w-32"
              type="reset"
              onClick={handleDeleteClose}
            >
              Cancel
            </Button>
          </div>
        </div>
      </form>
    </PopUpWrapper>
  );
};

export default UserDelete;
