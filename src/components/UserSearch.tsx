import Cross from "./icons/Cross";
import Button from "./layout/Button";
import TextInput from "./layout/TextInput";

const UserSearch = () => {
  return (
    <TextInput
      name="search-box"
      placeholder="Search"
      className="h-10 bg-transparent w-full px-2 outline-none"
      postIcon={
        <Button className="flex justify-center items-center hover:scale-110">
          <Cross />
        </Button>
      }
    />
  );
};

export default UserSearch;
