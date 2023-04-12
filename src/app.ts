
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import filmRoutes from "./routes/filmRoutes.js";
import { Request, Response } from "express";


dotenv.config();

const app = express()

app.use(cors());
app.use(express.json());

app.use([filmRoutes]);//preencher com as rotas que forem criadas

app.listen(process.env.PORT, () => console.log(`Server Initialized. Port: ${process.env.PORT} `))