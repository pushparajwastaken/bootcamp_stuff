import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();
async function createUser() {
  await client.user.create({
    data: {
      username: "",
      email: "",
      password: "",
    },
  });
}
async function findUser() {
  await client.user.findFirst({
    where: {
      id: 1,
    },
    select: {
      username: true,
    },
  });
}
createUser();
