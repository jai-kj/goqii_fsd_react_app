import { format, formatDistanceStrict } from "date-fns";
import { useMemo } from "react";
import { IUser } from "../context/state";
import Calender from "./icons/Calender";
import Mail from "./icons/Mail";
import Saved from "./icons/Saved";
import User from "./icons/User";
import UserItemAction from "./UserItemAction";
interface IUserItemProps {
  user: IUser;
  handleEditOpen: () => void;
  handleDeleteOpen: () => void;
}

const UserItem = ({
  user,
  handleEditOpen,
  handleDeleteOpen,
}: IUserItemProps) => {
  const formattedDOB = useMemo(
    () => format(new Date(user.dob), "do MMM yyyy"),
    [user.dob]
  );

  const formattedUpdatedAt = useMemo(
    () =>
      formatDistanceStrict(new Date(user.updated_at), new Date(), {
        addSuffix: true,
      }),
    [user.updated_at]
  );

  return (
    <li className="w-full bg-slate-600 rounded-sm px-2 py-2 flex flex-col lg:flex-row gap-2 relative group cursor-default">
      <div
        className="flex items-center gap-3 w-full lg:w-3/12"
        title={user.name}
      >
        <User />
        <span className="truncate">{user.name}</span>
      </div>
      <div
        className="flex items-center gap-3 w-full lg:w-3/12"
        title={user.email}
      >
        <Mail />
        <span className="truncate">{user.email}</span>
      </div>
      <div
        className="flex items-center gap-3 w-full lg:w-2/12"
        title="Date of birth"
      >
        <Calender />
        <span className="truncate">{formattedDOB}</span>
      </div>
      <div
        className="flex items-center gap-3 w-full lg:w-3/12"
        title="Updated at"
      >
        <Saved />
        <span className="truncate text-balance">
          Last updated: {formattedUpdatedAt}
        </span>
      </div>
      <UserItemAction
        id={user.id}
        handleEditOpen={handleEditOpen}
        handleDeleteOpen={handleDeleteOpen}
      />
    </li>
  );
};

export default UserItem;
