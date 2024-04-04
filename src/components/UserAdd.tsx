import { useMemo } from "react";
import { useTextInput } from "../hooks/useInput";
import Cross from "./icons/Cross";
import Button from "./layout/Button";
import TextInput from "./layout/TextInput";
import PopUpWrapper from "./PopUpWrapper";

interface IUserAddProps {
  show: boolean;
  handleClose: () => void;
}

const UserAdd = ({ show, handleClose }: IUserAddProps) => {
  const nameInputHook = useTextInput({
    regexCheck: true,
    regex: /^[a-zA-Z][a-zA-Z0-9 ]*$/,
  });
  const emailInputHook = useTextInput({
    regexCheck: true,
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  });
  const dobInputHook = useTextInput({});

  const dateLocalNow = useMemo(
    () =>
      new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .slice(0, 10),
    []
  );

  const handleReset = () => {
    nameInputHook.onUpdate();
    emailInputHook.onUpdate();
    dobInputHook.onUpdate();
  };

  return (
    <PopUpWrapper show={show} handleClose={handleClose}>
      <div className="flex items-center justify-center w-full relative pb-3">
        <h2 className="text-xl font-medium text-center">Add User</h2>
        <Button
          onClick={handleClose}
          className="hover:scale-110 absolute right-0"
        >
          <Cross />
        </Button>
      </div>
      <form className="flex flex-col w-full h-full py-3 gap-y-6">
        <TextInput
          name="name"
          autoComplete="name"
          placeholder="Enter name"
          inputHook={nameInputHook}
          errorMessage="Invalid name"
          required
        />
        <TextInput
          type="email"
          name="email"
          autoComplete="email"
          placeholder="Enter email"
          inputHook={emailInputHook}
          errorMessage="Invalid email address"
          required
        />
        <TextInput
          type="date"
          name="date"
          autoComplete="bday-day"
          placeholder="Enter date of birth"
          inputHook={dobInputHook}
          max={dateLocalNow}
          required
        />
        <div className="flex w-full h-full">
          <div className="flex w-full h-full justify-end space-x-3">
            <Button
              className="bg-green-500 hover:bg-green-600 active:bg-green-600 h-10 rounded-md w-1/2 md:w-32"
              type="submit"
            >
              Save
            </Button>
            <Button
              className="border border-gray-300 hover:bg-gray-300 hover:text-gray-800 h-10 rounded-md w-1/2 md:w-32"
              type="reset"
              onClick={handleReset}
            >
              Clear
            </Button>
          </div>
        </div>
      </form>
    </PopUpWrapper>
  );
};

export default UserAdd;
