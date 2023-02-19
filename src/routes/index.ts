import { Router } from "express";
import swaggerUi from "swagger-ui-express";

import swaggerFile from "../swagger.json";
import { usersRoutes } from "./users.routes";

const router = Router();

router.use("/users", usersRoutes);

router.use("/api-docs", swaggerUi.serve);
router.get("/api-docs", swaggerUi.setup(swaggerFile));

export { router };
