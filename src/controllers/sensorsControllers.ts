import { Request, Response } from "express";
import { SensorData } from "../models/SensorsData";

/**
 * Create sensor data using query parameters.
 */
export const createSensorData = async (req: Request, res: Response) => {
  try {
    // Extract query parameters
    const { temperature, humidity, lightIntensity, atmosphericPressure } =
      req.query;

    if (!temperature || !humidity || !lightIntensity || !atmosphericPressure) {
      res.status(400).json({ error: "Missing required query parameters" });
      return;
    }

    const newData = await SensorData.create({
      temperature: Number(temperature),
      humidity: Number(humidity),
      lightIntensity: Number(lightIntensity),
      atmosphericPressure: Number(atmosphericPressure),
    });

    res
      .status(201)
      .json({ message: "Data created successfully", data: newData });
  } catch (error) {
    console.error("Error creating sensor data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getAllSensorData = async (req: Request, res: Response) => {
  try {
    const data = await SensorData.findAll();
    if (data.length === 0) {
      res.status(404).json({ error: "No data" });
      return;
    }
    res
      .status(200)
      .json({ message: "Sensor data retrieved successfully", data });
  } catch (error) {
    console.error("Error retrieving sensor data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getUpdatedSensorData = async (_req: Request, res: Response) => {
  try {
    const data = await SensorData.findOne({
      order: [["id", "DESC"]],
    });
    if (!data) {
      res.status(404).json({ error: "No data" });
      return;
    }
    res
      .status(200)
      .json({ message: "Sensor data retrieved successfully", data });
  } catch (error) {
    console.error("Error retrieving sensor data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
