import prismaClient from "../../prisma";

interface CountRequest {
  user_id: string;
}
class CountHaircurtService {
  async execute({ user_id }: CountRequest) {
    const count = await prismaClient.haircut.count({
      where: {
        user_id,
      },
    });

    return count;
  }
}

export { CountHaircurtService };
