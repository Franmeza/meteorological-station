import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();
const { POSTGRES_URL } = process.env;
export const sequelize = new Sequelize(`${POSTGRES_URL}`, {
  logging: false,

  dialectOptions: {
    ssl: {
      require: true, // Ensure SSL is enabled
      rejectUnauthorized: false, // Disable certificate validation (ignore self-signed certificate)
    },
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });
