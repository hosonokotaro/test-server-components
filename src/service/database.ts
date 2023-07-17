import { setTimeout } from "node:timers/promises";

const data = [
  {
    title: "Docs",
    description: "Find in-depth information about Next.js features and API.",
  },
  {
    title: "Learn",
    description: "Learn about Next.js in an interactive course with quizzes!",
  },
  {
    title: "Templates",
    description: "Explore the Next.js 13 playground.",
  },
  {
    title: "Deploy",
    description:
      "Instantly deploy your Next.js site to a public URL with Vercel.",
  },
] as const;

export const database = async () => {
  return await setTimeout(2000, data);
};
