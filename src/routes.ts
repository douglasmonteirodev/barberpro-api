import { Router } from "express";
import { CreateHaircutController } from "./controllers/haircut/CreateHaircutController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { UpdateUserController } from "./controllers/user/UpdateUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";

const router = Router();

// ---ROTAS USER---
router.post("/users", new CreateUserController().handle);
router.post("/session", new AuthUserController().handle);
router.get("/me", isAuthenticated, new DetailUserController().handle);
router.put("/users", isAuthenticated, new UpdateUserController().handle);

// ---ROTAS HAIRCUT---
router.post("/haircut", isAuthenticated, new CreateHaircutController().handle);

//________________________________________________________________________________//
export { router };
