import { useTextInput } from "../hooks/useInput";
import Cross from "./icons/Cross";
import Button from "./layout/Button";
import TextInput from "./layout/TextInput";

const UserSearch = () => {
  const searchInputHook = useTextInput({
    handleOnChange: (val) => console.log(val),
  });
  return (
    <TextInput
      name="search-box"
      inputHook={searchInputHook}
      placeholder="Search"
      autoComplete="off"
      postIcon={
        <Button
          className="flex justify-center items-center hover:scale-110"
          onClick={() => searchInputHook.onUpdate()}
        >
          <Cross />
        </Button>
      }
    />
  );
};

export default UserSearch;
