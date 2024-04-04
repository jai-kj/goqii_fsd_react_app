import PopUpWrapper from "./PopUpWrapper";

interface IUserDeleteProps {
  show: boolean;
  handleClose: () => void;
}
const UserDelete = ({ show, handleClose }: IUserDeleteProps) => {
  return (
    <PopUpWrapper show={show} handleClose={handleClose} wantBottomSheet={false}>
      <div className="flex items-center justify-center w-full relative">
        Delete
      </div>
    </PopUpWrapper>
  );
};

export default UserDelete;
