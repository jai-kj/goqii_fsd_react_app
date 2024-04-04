import UserItem from "./UserItem";

const users = [
  {
    id: "1",
    name: "Test user 1",
    email: "test.1@gmail.com",
    dob: "23-09-1999",
    created_at: "04-04-2024",
    updated_at: "04-04-2024",
  },
  {
    id: "2",
    name: "Test user 2",
    email: "test.2@gmail.com",
    dob: "15-05-1985",
    created_at: "04-04-2024",
    updated_at: "04-04-2024",
  },
  {
    id: "3",
    name: "Test user 3",
    email: "test.3@gmail.com",
    dob: "08-12-1976",
    created_at: "04-04-2024",
    updated_at: "04-04-2024",
  },
  {
    id: "4",
    name: "Test user 4",
    email: "test.4@gmail.com",
    dob: "30-11-1992",
    created_at: "04-04-2024",
    updated_at: "04-04-2024",
  },
  {
    id: "5",
    name: "Test user 5",
    email: "test.5@gmail.com",
    dob: "02-07-1988",
    created_at: "04-04-2024",
    updated_at: "04-04-2024",
  },
  {
    id: "6",
    name: "Test user 6",
    email: "test.6@gmail.com",
    dob: "19-04-2001",
    created_at: "04-04-2024",
    updated_at: "04-04-2024",
  },
  {
    id: "7",
    name: "Test user 7",
    email: "test.7@gmail.com",
    dob: "14-10-1995",
    created_at: "04-04-2024",
    updated_at: "04-04-2024",
  },
  {
    id: "8",
    name: "Test user 8",
    email: "test.8@gmail.com",
    dob: "05-03-1979",
    created_at: "04-04-2024",
    updated_at: "04-04-2024",
  },
  {
    id: "9",
    name: "Test user 9",
    email: "test.9@gmail.com",
    dob: "27-01-1990",
    created_at: "04-04-2024",
    updated_at: "04-04-2024",
  },
  {
    id: "10",
    name: "Test user 10",
    email: "test.10@gmail.com",
    dob: "10-08-2000",
    created_at: "04-04-2024",
    updated_at: "04-04-2024",
  },
  {
    id: "11",
    name: "Test user 11",
    email: "test.11@gmail.com",
    dob: "03-06-1982",
    created_at: "04-04-2024",
    updated_at: "04-04-2024",
  },
  {
    id: "12",
    name: "Test user 12",
    email: "test.12@gmail.com",
    dob: "17-09-1973",
    created_at: "04-04-2024",
    updated_at: "04-04-2024",
  },
  {
    id: "13",
    name: "Test user 13",
    email: "test.13@gmail.com",
    dob: "22-11-1987",
    created_at: "04-04-2024",
    updated_at: "04-04-2024",
  },
  {
    id: "14",
    name: "Test user 14",
    email: "test.14@gmail.com",
    dob: "09-01-1998",
    created_at: "04-04-2024",
    updated_at: "04-04-2024",
  },
  {
    id: "15",
    name: "Test user 15",
    email: "test.15@gmail.com",
    dob: "12-04-1977",
    created_at: "04-04-2024",
    updated_at: "04-04-2024",
  },
];

const UserList = () => {
  return (
    <div className="w-full h-full overflow-hidden">
      <ul className="w-full h-full overflow-y-scroll space-y-3 pr-2">
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
};

export default UserList;
