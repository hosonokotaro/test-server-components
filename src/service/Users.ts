export const Users = async <T>(): Promise<T | undefined> => {
  const res = await fetch(process.env.NEXT_PUBLIC_HASURA_URL || "", {
    headers: {
      "x-hasura-admin-secret": process.env.NEXT_PUBLIC_HASURA_KEY || "",
    },
    cache: "no-store",
  });

  try {
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
