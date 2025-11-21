import express from "express";
import cors from "cors";
import router from "./routes/index.routes.js";
import { errrorHandler } from "./middlewares/error.middleware.js";

const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use("/api", router);
app.use(errrorHandler);

export default app;
