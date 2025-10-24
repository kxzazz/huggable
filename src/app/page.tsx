import { db } from "@/db/db";
import { postsTable, usersTable } from "@/db/schema";
const Page = async () => {
  const users = await db.select().from(usersTable);
  const posts = await db.select().from(postsTable);

  return (
    <div className="">
      <pre>{JSON.stringify(users, null, 2)}</pre>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </div>
  );
};

export default Page;
