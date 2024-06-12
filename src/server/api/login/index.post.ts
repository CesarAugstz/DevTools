import { eq } from "drizzle-orm";
import { db } from "~/server/db/postgres";
import { User } from "~/server/db/schema";

export default defineEventHandler(async (event) => {
  const { email, password } = await readBody(event);
  console.log('email:', email);
  console.log('password:', password);


  const [user] = await db.select().from(User).where(eq(User.email, email))

  console.log('user:', user);

  if (!user)
    return new Response('User not found', { status: 404 });



  return new Response();


})
