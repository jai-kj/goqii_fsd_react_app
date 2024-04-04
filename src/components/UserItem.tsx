import Calender from "./icons/Calender";
import Mail from "./icons/Mail";
import Saved from "./icons/Saved";
import User from "./icons/User";
import UserItemAction from "./UserItemAction";

interface IUserItemProps {
  id: string;
  name: string;
  email: string;
  dob: string;
  created_at: string;
  updated_at: string;
}

const UserItem = ({ user }: { user: IUserItemProps }) => {
  return (
    <li className="w-full bg-slate-600 rounded-sm px-4 py-2 flex flex-col md:flex-row gap-2 relative group">
      <div
        className="flex items-center gap-3 w-full md:w-1/4"
        title={user.name}
      >
        <User />
        {user.name}
      </div>
      <div
        className="flex items-center gap-3 w-full md:w-1/4"
        title={user.email}
      >
        <Mail />
        {user.email}
      </div>
      <div
        className="flex items-center gap-3 w-full md:w-1/4"
        title="Date of birth"
      >
        <Calender />
        {user.dob}
      </div>
      <div
        className="flex items-center gap-3 w-full md:w-1/4"
        title="Updated at"
      >
        <Saved />
        {user.updated_at}
      </div>
      <UserItemAction id={user.id} />
    </li>
  );
};

export default UserItem;
