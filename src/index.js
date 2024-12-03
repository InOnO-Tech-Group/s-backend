import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";

import dbConnection from "./database/config/config.js";
import router from "./routes/index.js";
import { scheduleUpdateAnnouncementDues } from "./database/cron/announcement.js";
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/api/v1/", router);

const port = process.env.PORT;

dbConnection()
  .then(() => {
    app.listen(port, () => console.log(`App running on PORT ${port}`));
    scheduleUpdateAnnouncementDues();
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });
