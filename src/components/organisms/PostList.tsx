import { Post } from "@/molecules/Post";
import { mockData } from "~/service/mockData";

export const PostList = async () => {
  console.time("get data");
  const data = await mockData();
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
