import prismaClient from "../../prisma";

interface CheckSub {
  user_id: string;
}

class CheckSubService {
  async execute({ user_id }: CheckSub) {
    const status = await prismaClient.user.findFirst({
      where: {
        id: user_id,
      },
      select: {
        subscriptions: {
          select: {
            id: true,
            status: true,
          },
        },
      },
    });

    return status;
  }
}

export { CheckSubService };
