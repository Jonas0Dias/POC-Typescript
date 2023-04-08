import { Router } from "express";
import { findAll, addFilm, updateFilm, deleteFilm } from "../controllers/filmControllers.js";
// import { visitCount } from "../controllers/rankingController.js";

const filmRoutes = Router();

filmRoutes.get("/film", findAll);
filmRoutes.post("/film", addFilm);
filmRoutes.put("/film/:id", updateFilm )
filmRoutes.delete("/film/:id", deleteFilm )

export default filmRoutes;