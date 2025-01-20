import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from "sequelize";
import { sequelize } from "../db/db";

export class SensorData extends Model<
  InferAttributes<SensorData>,
  InferCreationAttributes<SensorData>
> {
  //use declare to ensure TypeScript does not emit those class properties
  declare id: CreationOptional<number>;
  declare temperature: number;
  declare humidity: number;
  declare lightIntensity: number;
  declare atmosphericPressure: number;
}

SensorData.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    temperature: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    humidity: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    lightIntensity: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    atmosphericPressure: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "sensors_data",
  }
);
