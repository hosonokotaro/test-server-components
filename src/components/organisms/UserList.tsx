import { User } from "@/molecules/User";
import { Users } from "~/service/Users";

type User = {
  id: string;
  name: string;
};

export const UserList = async () => {
  const data = await Users<{ users: User[] }>();

  return (
    <div style={{ border: "1px solid #ccc" }}>
      <h2>UserList</h2>
      <div>Rest API で取得したデータを Server components で受け取る</div>
      <div style={{ margin: "12px 0 0 0" }}>
        {data?.users.map(({ id, name }) => (
          <User key={id} id={id} name={name} />
        ))}
      </div>
    </div>
  );
};
