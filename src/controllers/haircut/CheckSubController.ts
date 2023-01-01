import { Request, Response } from "express";
import { CheckSubService } from "../../services/haircut/CheckSubService";

class CheckSubController {
  async handle(req: Request, res: Response) {
    const user_id = req.user_id;
    const checkSubService = new CheckSubService();

    const status = await checkSubService.execute({
      user_id,
    });

    return res.json(status);
  }
}

export { CheckSubController };
