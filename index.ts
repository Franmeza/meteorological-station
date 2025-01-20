import { server } from "./src/server";
import { sequelize } from "./src/db/db";
import "./src/models/SensorsData";

const PORT = process.env.PORT || 3000;

sequelize
  .sync({ force: true })
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });
