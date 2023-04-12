import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import filmRoutes from "./routes/filmRoutes.js";
dotenv.config();
var app = express();
app.use(cors());
app.use(express.json());
app.use([filmRoutes]); //preencher com as rotas que forem criadas
app.listen(process.env.PORT, function () { return console.log("Server Initialized. Port: ".concat(process.env.PORT, " ")); });
