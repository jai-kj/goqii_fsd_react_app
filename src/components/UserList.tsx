import { useEffect } from "react";
import { useUIDispatch, useUIState } from "../context/context";
import { useShow } from "../hooks/useShow";
import UserDelete from "./UserDelete";
import UserEdit from "./UserEdit";
import UserItem from "./UserItem";
import Loader from "./layout/Loader";

const UserList = () => {
  const {
    visible: editVisible,
    handleOpen: handleEditOpen,
    handleClose: handleEditClose,
  } = useShow({ defaultState: false });

  const {
    visible: deleteVisible,
    handleOpen: handleDeleteOpen,
    handleClose: handleDeleteClose,
  } = useShow({ defaultState: false });

  const { fetchUserList } = useUIDispatch();
  const {
    userList: { data: usersData, loading },
    filteredUserList: { data: filteredData },
  } = useUIState();

  useEffect(() => {
    fetchUserList();
  }, [fetchUserList]);

  if (loading) return <Loader className="m-auto" />;

  if (!usersData?.length)
    return <p className="px-2">User records not found in the database</p>;

  if (filteredData && !filteredData.length)
    return <p className="px-2">No matching user record found</p>;

  return (
    <div className="w-full h-full overflow-hidden">
      <UserEdit show={editVisible} handleClose={handleEditClose} />
      <UserDelete show={deleteVisible} handleClose={handleDeleteClose} />

      <ul className="w-full h-full overflow-y-auto space-y-3">
        {(filteredData ?? usersData).map((user) => (
          <UserItem
            key={user.id}
            user={user}
            handleEditOpen={handleEditOpen}
            handleDeleteOpen={handleDeleteOpen}
          />
        ))}
      </ul>
    </div>
  );
};

export default UserList;
