import { useMemo } from "react";
import { useUIDispatch, useUIState } from "../context/context";
import { useTextInput } from "../hooks/useInput";
import Cross from "./icons/Cross";
import Button from "./layout/Button";
import TextInput from "./layout/TextInput";

const UserSearch = () => {
  const {
    userList: { data, loading },
  } = useUIState();
  const { searchInUserList, resetSearch } = useUIDispatch();

  const searchDisabled = useMemo(
    () => !data?.length || loading,
    [data, loading]
  );

  const searchInputHook = useTextInput({
    handleOnChange: (val) => {
      if (!val) {
        resetSearch();
        return;
      }
      searchInUserList(val);
    },
  });

  return (
    <TextInput
      name="search-box"
      inputHook={searchInputHook}
      placeholder="Search"
      autoComplete="off"
      disabled={searchDisabled}
      postIcon={
        <Button
          className="flex justify-center items-center hover:scale-110 disabled:cursor-not-allowed"
          onClick={() => {
            searchInputHook.onUpdate();
            resetSearch();
          }}
          disabled={searchDisabled}
        >
          <Cross />
        </Button>
      }
    />
  );
};

export default UserSearch;
