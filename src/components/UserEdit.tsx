import Cross from "./icons/Cross";
import Button from "./layout/Button";
import PopUpWrapper from "./PopUpWrapper";

interface IUserEditProps {
  show: boolean;
  handleClose: () => void;
}

const UserEdit = ({ show, handleClose }: IUserEditProps) => {
  return (
    <PopUpWrapper show={show} handleClose={handleClose}>
      <div className="flex items-center justify-center w-full relative">
        <h2 className="text-xl font-medium text-center">Edit User</h2>
        <Button
          onClick={handleClose}
          className="hover:scale-110 absolute right-0"
        >
          <Cross />
        </Button>
      </div>
    </PopUpWrapper>
  );
};

export default UserEdit;
