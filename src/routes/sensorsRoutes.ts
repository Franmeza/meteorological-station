import { Router } from "express";
import {
  createSensorData,
  getAllSensorData,
  getUpdatedSensorData,
} from "../controllers/sensorsControllers";
import { validateApiKey } from "../middleware/authMiddleware";

const sensorsRoutes = Router();

sensorsRoutes.get("/data", getAllSensorData);

sensorsRoutes.get("/weather", getUpdatedSensorData);

sensorsRoutes.post("/update", validateApiKey, createSensorData);

export default sensorsRoutes;
