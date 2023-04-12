import errors from "../errors/index.js";
import filmRepositories from "../repositories/filmRepositories.js";
import { Filme } from "../protocols/filme.js";
import { filmSchema } from "../schemas/Film"
import { validateSchema } from "../middlewares/schemaMiddleware"

async function findAll() {

    const { rows, rowCount } = await filmRepositories.findAll();
    if (!rowCount) throw errors.notFoundError();
    return rows;
  }

  async function addFilm({nome, plataforma, status, genero} :Filme) {

    const { rows, rowCount } = await filmRepositories.findByName(nome); // aqui eu to vendo se existe algum filme com esse nome
    if ( rowCount>0 ) throw errors.conflictError("Film already exists");
    await filmRepositories.addFilm({ nome, plataforma, status, genero});
    // console.log(genero)
    genero.map( async (g) => {
        // console.log(g)
         const findGenero = await filmRepositories.findGenero(g)
        //  console.log(teste.rowCount)
         if (findGenero.rowCount === 0){
            filmRepositories.addGenero(g)
        }
       
    })
    
  }

  async function updateFilm(filme_id: String) {
    const {rows, rowCount } =  await filmRepositories.findById(filme_id);
    if (!rowCount) throw errors.notFoundError();
    const updateFilm = await filmRepositories.updateFilm(filme_id)
    return (updateFilm)
  }


  async function deleteFilm(filme_id: String) {
    const { rows, rowCount } =  await filmRepositories.findById(filme_id);
    if (!rowCount) throw errors.notFoundError();
    const deleteFilm = await filmRepositories.deleteFilm(filme_id)
    return (deleteFilm)
  }


  export default { findAll, addFilm, updateFilm, deleteFilm};