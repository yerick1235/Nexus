import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import { config } from "dotenv";

//# Configs
const app = express();
config();
const port = process.env.port || 3200;

//# Express Server Configs
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

//# Routes

//# Build Server
export const initServer = () => {
  app.listen(port);
  console.log(`Server HTTP Running in port ${port}`);
};
