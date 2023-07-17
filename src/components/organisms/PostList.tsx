import { Post } from "@/molecules/Post";
import { database } from "~/service/database";

export const PostList = async () => {
  console.time("get data");
  const data = await database();
  console.timeEnd("get data");

  return (
    <div>
      {data.map((post) => (
        <Post
          key={post.title}
          title={post.title}
          description={post.description}
        />
      ))}
    </div>
  );
};
