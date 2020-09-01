import Router, {Request, Response} from 'express';
import { getRepository } from 'typeorm';
import Candidato from '../models/Candidato';

const candidatoRoutes = Router();

candidatoRoutes.post('/', async(req:Request, res:Response) =>{
    const {
        nome,
        cpf,
        email,
        telefone,
        convenio,
        solucao
    } = req.body;

    const repoCandidato = getRepository(Candidato);

    try{

        const createCandidato = await repoCandidato.create({
            nome,
            cpf,
            email,
            telefone,
            convenio,
            solucao 
        })


        const result = await repoCandidato.save(createCandidato);

        return res.status(201).json(result);
    }catch(err){
        console.log('erro : ', err.message);
        return res.status(400).json({
            erro : 'erro ao cadastrar candidato '
        })
    }


});

candidatoRoutes.get('/:id', async(req:Request, res:Response) => {
    const repoCandidatoEpress = getRepository(Candidato);

    const { id } = req.params;

    try{ 

        const result = await repoCandidatoEpress.find({
            where:{
                id
            }
        });

        res.status(200).json(result);

    }catch(err){
        console.log("erro :", err.message);

        res.status(400).json({erro:"erro ao listar candidatos express"})
    }
});

candidatoRoutes.get('/', async(req:Request, res:Response) => {
    const repoCandidatoEpress = getRepository(Candidato);

    const { id } = req.params;

    try{ 

        const result = await repoCandidatoEpress.find({
            select:[
                "cpf","email","nome","telefone"
            ]
        });

        res.status(200).json(result);

    }catch(err){
        console.log("erro :", err.message);

        res.status(400).json({erro:"erro ao listar candidatos express"})
    }
});

candidatoRoutes.delete('/id', async(req:Request, res:Response) =>{
    const { id } = req.params;

    const repoCandidato = getRepository(Candidato);

    const result = repoCandidato.softDelete({ id })
    
})

export default candidatoRoutes;