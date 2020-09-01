import Router, {Request, Response} from 'express';
import { getRepository } from 'typeorm';
import CandidatoExpress from '../models/CandidatoExpress';

const candidatoExpressRoutes = Router();

candidatoExpressRoutes.post('/', async(req:Request, res:Response) =>{
    const {
        nome,
        cpf,
        email,
        telefone,
        curso,
        previsaoFormatura,   
        valorContratado,
        parcelasCobertas,
        condicaoDaRestituicao,
        validade,
        inicioDaRestituicao,
        convenio,
        solucao  
    } = req.body;

    const repoCandidatoEpress = getRepository(CandidatoExpress);

    try{
        const createCandidatoExpress = await repoCandidatoEpress.create({
            nome,
            cpf,
            email,
            telefone,
            curso,
            previsaoFormatura,   
            valorContratado,
            parcelasCobertas,
            condicaoDaRestituicao,
            validade,
            inicioDaRestituicao,
            convenio,
            solucao 
        })
    
        const result = await repoCandidatoEpress.save(createCandidatoExpress)

        return res.status(201).json(result)
    }catch(err){
        console.log('erro : ', err.message);
        return res.status(400).json({erro:'erro no cadastro candidato express !!!'})
    }


});

candidatoExpressRoutes.get('/:id', async(req:Request, res:Response) => {
    const repoCandidatoEpress = getRepository(CandidatoExpress);

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

candidatoExpressRoutes.get('/', async(req:Request, res:Response) => {
    const repoCandidatoEpress = getRepository(CandidatoExpress);

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
})

export default candidatoExpressRoutes;