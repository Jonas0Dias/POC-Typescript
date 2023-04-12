import connectionDb from "../config/database.js";
import { Filme } from "../protocols/filme.js";


async function findAll() {
    return await connectionDb.query(
      `
          SELECT 
          *
          FROM filmes 
          ;
      `
    );
  }

  async function addFilm({nome, plataforma, status}: Filme) {
    return await connectionDb.query(
      `
          INSERT INTO 
          Filmes
          (nome, plataforma, status) 
          VALUES 
          ($1, $2, $3) 

      `,[nome , plataforma, status]
    );
  }

  async function findByName(nome : String) {
    return await connectionDb.query(
      `
      SELECT *
      FROM filmes
      WHERE nome=$1
      
  `, [nome]
    );
  }

  async function findById(filme_id: String) {
    return await connectionDb.query(
      `
      SELECT *
      FROM filmes
      WHERE id=$1
      
  `, [filme_id]
    );
  }

  async function findGenero(genero: String ) {
    return await connectionDb.query(
      `
      SELECT *
      FROM generos
      WHERE nome=$1
      
  `, [genero]
    );
  }


  async function addGenero(g : String) {
    console.log(g)
    return await connectionDb.query(
      `
          INSERT INTO 
          generos
          (nome)
          VALUES 
          ($1) 

      `,[g]
    );
  }

  async function updateFilm(filme_id: String) {
    return await connectionDb.query(
      `
      UPDATE filmes
      SET status = 'true'
      WHERE id = $1;

      `,[filme_id]
    );
  }


  async function deleteFilm(filme_id: String) {
    return await connectionDb.query(
      `
      DELETE FROM filmes
      WHERE id = $1;

      `,[filme_id]
    );
  }




  export default { findAll, addFilm, findByName, findGenero, addGenero, updateFilm, findById, deleteFilm};