import prismaClient from "../../prisma";

interface HaircutRequest {
  user_id: string;
  name: string;
  price: number;
}

class CreateHaircutService {
  async execute({ name, price, user_id }: HaircutRequest) {
    if (!name || !price) {
      throw new Error("Error");
    }

    //Verificar qts modelos de cortes já tem cadastrado
    const myHaircut = await prismaClient.haircut.count({
      where: {
        user_id,
      },
    });

    // Verificar se ele é premium
    const user = await prismaClient.user.findFirst({
      where: {
        id: user_id,
      },
      include: {
        subscriptions: true,
      },
    });

    //Criando validação
    if (myHaircut >= 3 && user?.subscriptions?.status !== "active") {
      throw new Error("Não autorizado");
    }

    const haircut = prismaClient.haircut.create({
      data: {
        name,
        price,
        user_id,
      },
    });

    return haircut;
  }
}

export { CreateHaircutService };
