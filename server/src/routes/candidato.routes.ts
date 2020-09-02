import Router, {Request, Response} from 'express';
import { getRepository } from 'typeorm';
import Candidato from '../models/Candidato';
import { validate } from 'class-validator';

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

        const errors = await validate(createCandidato);

        if(errors.length !== 0){
            return res.status(400).json(errors.map(erro => erro.constraints))
        }

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

candidatoRoutes.delete('/:id', async(req:Request, res:Response) =>{
    const { id } = req.params;

    const repoCandidato = getRepository(Candidato);
    try{
        const result = repoCandidato.softDelete({ id })

        return res.status(200).json(result)
    }catch(err){
        console.log('erro', err.message);
        return res.status(400).json({
            erro:'erro ao deletar candidato '
        })
    }    
});

export default candidatoRoutes;