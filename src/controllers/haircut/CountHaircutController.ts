import { Request, Response } from "express";
import { CountHaircurtService } from "../../services/haircut/CountHaircurtService";

class CountHaircutController {
  async handle(req: Request, res: Response) {
    const user_id = req.user_id;

    const countHaircuts = new CountHaircurtService();

    const count = await countHaircuts.execute({
      user_id,
    });

    return res.json(count);
  }
}

export { CountHaircutController };
