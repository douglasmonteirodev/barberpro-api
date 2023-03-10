import { Request, Response } from "express";
import { CreateUserService } from "../../services/user/CreateUserService";

class CreateUserController {
  async handle(req: Request, res: Response) {
    const createUserService = new CreateUserService();

    const { email, name, password } = req.body;

    const user = await createUserService.execute({ email, name, password });

    return res.json(user);
  }
}

export { CreateUserController };
