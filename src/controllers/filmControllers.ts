import filmServices from "../services/filmServices";
import { Request, Response } from "express";
import { Filme } from "../protocols/filme";



// GET PARA /film
export async function findAll(req: Request , res: Response){

   try{
    const films : string[] = await filmServices.findAll(); 						
    return res.status(200).send(films)
   }

    catch(err: any){
        res.status(500).send(err.message)
    }

} 



export async function addFilm(req: Request , res: Response){

    const { nome, plataforma, status, genero }  = req.body as Filme;
    // console.log(req.body)
   try{
    const checkIfAddFilm = await filmServices.addFilm({ nome, plataforma, status, genero }); 						
    return res.status(200).send('Filme Adicionado com sucesso.')
   }
    catch(err: any){
        res.status(500).send(err.message)
    }
} 

export async function updateFilm(req: Request , res: Response){
    console.log(req.params.id)
    const filme_id : string = req.params.id ;
    // console.log(req.body)

   try{
    await filmServices.updateFilm(filme_id)				
    return res.status(200).send('Filme marcado como já visto com sucesso')
   }

    catch(err: any){
        res.status(500).send(err.message)
    }
} 

export async function deleteFilm(req: Request , res: Response){
    console.log(req.params.id)
    const filme_id : string = req.params.id ;
    // console.log(req.body)
   try{
    await filmServices.deleteFilm(filme_id)				
    return res.status(200).send('Filme excluído com sucesso')
   }
    catch(err: any){
        res.status(500).send(err.message)
    }
} 



