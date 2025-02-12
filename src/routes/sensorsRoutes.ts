import { Router } from "express";
import {
  createSensorData,
  getAllSensorData,
  getUpdatedSensorData,
} from "../controllers/sensorsControllers";
import { validateApiKey } from "../middleware/authMiddleware";

const sensorsRoutes = Router();

sensorsRoutes.get("/weather", getAllSensorData);

sensorsRoutes.get("/weather/latest", getUpdatedSensorData);

sensorsRoutes.post("/update", validateApiKey, createSensorData);

sensorsRoutes.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

export default sensorsRoutes;
