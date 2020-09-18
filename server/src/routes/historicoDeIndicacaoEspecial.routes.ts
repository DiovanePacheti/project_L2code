import Router, {Request, Response} from 'express';
import { getRepository } from 'typeorm';
import Candidato from '../models/Candidato';
import CandidatoExpress from '../models/CandidatoExpress';

const historicoDeIndicacaoEspeciaal = Router();

historicoDeIndicacaoEspeciaal.get('/', async(req:Request, res:Response) =>{
    
    const filter = req.query;
    
    const cpf = filter.cpf as string;
    const nome = filter.nome as string;
    const convenio  = filter.convenio as string;
    const solucao  = filter.solucao as string;
    
    if(!cpf || !solucao || !nome || !convenio){
        return res.status(400).json({
            erroFiltro:' complete todos os campos de busca !'
        })
    }
    
    try{
       let t = (solucao == "Express")?"CandidatoExpress":"Candidato";
       console.log(t)
        const  repoHistorico = getRepository(t);

        const result = await repoHistorico.find({
            where:{
                cpf,
                nome,
                convenio,
                solucao
            }
        })
        console.log(result)
        return res.status(200).json(result)        
    }catch(err){
        console.log('erro : ', err.message);
        return res.status(400).json({
            error:'nas busca do historico de indicados especiais'
        })
    }
})

export default historicoDeIndicacaoEspeciaal;
