import { Router } from "express";
import { findAll, addFilm, updateFilm, deleteFilm } from "../controllers/filmControllers.js";
import { filmSchema } from "../schemas/Film";
import { validateSchema } from "../middlewares/schemaMiddleware";

const filmRoutes: Router = Router();

filmRoutes.get("/film", findAll);
filmRoutes.post("/film", validateSchema(filmSchema),  addFilm);
filmRoutes.put("/film/:id",  updateFilm )
filmRoutes.delete("/film/:id", deleteFilm )

export default filmRoutes;