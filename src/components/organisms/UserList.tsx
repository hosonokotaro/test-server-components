import { User } from "@/molecules/User";
import { Users } from "~/service/Users";
import { block, wrapper } from "@/organisms/UserList.css";

type User = {
  id: string;
  name: string;
};

export const UserList = async () => {
  const data = await Users<{ users: User[] }>();

  return (
    <div className={block}>
      <h2>UserList</h2>
      <div>Rest API で取得したデータを Server components で受け取る</div>
      <div className={wrapper}>
        {data?.users.map(({ id, name }) => (
          <User key={id} id={id} name={name} />
        ))}
      </div>
    </div>
  );
};
