import { Router } from "express";
import { CheckSubController } from "./controllers/haircut/CheckSubController";
import { CountHaircutController as CountHaircut } from "./controllers/haircut/CountHaircutController";
import { CreateHaircutController } from "./controllers/haircut/CreateHaircutController";
import { DetailHaircutController as DetailHaircut } from "./controllers/haircut/DetailHaircutController";
import { ListHaircutController } from "./controllers/haircut/ListHaircutController";
import { UpdateHaircutController } from "./controllers/haircut/UpdateHaircutController";
import { NewScheduleController } from "./controllers/shedule/NewScheduleController";
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
router.get("/haircuts", isAuthenticated, new ListHaircutController().handle);
router.put("/haircut", isAuthenticated, new UpdateHaircutController().handle);
router.get("/haircut/check", isAuthenticated, new CheckSubController().handle);
router.get("/haircut/count", isAuthenticated, new CountHaircut().handle);
router.get("/haircut/detail", isAuthenticated, new DetailHaircut().handle);

// --- ROTAS SCHEDULE ---

router.post("/schedule", isAuthenticated, new NewScheduleController().handle);

//________________________________________________________________________________//
export { router };
