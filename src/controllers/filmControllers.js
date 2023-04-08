import filmServices from "../services/filmServices.js";

// GET PARA /film
export async function findAll(req,res){

   try{
    const films = await filmServices.findAll(); 						
    return res.status(200).send(films)
   }
    catch(err){
        res.status(500).send(err.message)
    }
} 


export async function addFilm(req,res){

    const { nome, plataforma, status, genero } = req.body;
    // console.log(req.body)
   try{
    const checkIfAddFilm = await filmServices.addFilm({ nome, plataforma, status, genero }); 						
    return res.status(200).send('Filme Adicionado com sucesso.')
   }
    catch(err){
        res.status(500).send(err.message)
    }
} 

export async function updateFilm(req,res){
    console.log(req.params.id)
    const filme_id = req.params.id ;
    // console.log(req.body)
   try{
    await filmServices.updateFilm(filme_id)				
    return res.status(200).send('Filme marcado como já visto com sucesso')
   }
    catch(err){
        res.status(500).send(err.message)
    }
} 

export async function deleteFilm(req,res){
    console.log(req.params.id)
    const filme_id = req.params.id ;
    // console.log(req.body)
   try{
    await filmServices.deleteFilm(filme_id)				
    return res.status(200).send('Filme excluído com sucesso')
   }
    catch(err){
        res.status(500).send(err.message)
    }
} 



