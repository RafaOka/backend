import { request, response, Router } from "express";
import userRoutes from "./user.routes";
import piuRoutes from "./piu.routes";

const routes = Router();

routes.use('/user', userRoutes);

routes.use('/piu', piuRoutes);

export default routes;