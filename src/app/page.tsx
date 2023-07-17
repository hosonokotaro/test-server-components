import Image from "next/image";
import { Echo } from "@/organisms/Echo";
import { PostList } from "@/organisms/PostList";

const Home = () => {
  return (
    <main>
      <div>
        <Image
          src="/vercel.svg"
          alt="Vercel Logo"
          width={100}
          height={24}
          priority
        />
      </div>

      <div>
        <Image
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      {/* Server */}
      <PostList />

      {/* Client */}
      <Echo />
    </main>
  );
};

export default Home;
