import React, {FormEvent, useState, useCallback, useEffect} from 'react';
import Input from '../Input';
import Select from '../Select';
import api from '../../services/api';
import ListagemCandidato, {Lista} from '../../components/ListagemCandidato';


import {Container, Cell, Validade, CellButton, SectionLista} from './styles';
import Button from '../Button';

interface InterfaceCandidato{
    cpf:string;
    nome:string;
    email:string;
    telefone:number;
    solucao:string;
    convenio:string;
    curso:string;
    previsaoFormatura:string; 
    valorContratado:number;
    parcelasCobertas: number;
    condicaoDaRestituicao: number;
    de:string;
    ate:string
    inicioDaRestituicao:string
}
const FormExpress: React.FC = () =>{

    const [candidato, setCandidato] = useState<InterfaceCandidato>({} as InterfaceCandidato);
    const [carregar, setCarregar] = useState(false);
    const [curso, setCurso] = useState('');

    const handleChange = useCallback((e: React.FormEvent<HTMLInputElement>) =>{
        setCandidato({
            ...candidato,
            [e.currentTarget.name]: e.currentTarget.value,
            solucao:"Express",
            convenio:"ULBRA-EAD"
        })
    }, [candidato])
const[listagemCanditatos, setListagemCandidato] = useState([]);
   
    function handleCreateCandidato(e:FormEvent){
        e.preventDefault();
        console.log(candidato)
        
        api.post('/candidatoExpress',{
            cpf:candidato.cpf,
            nome:candidato.nome,
            email:candidato.email,
            telefone:candidato.telefone,
            solucao:candidato.solucao,
            convenio:candidato.convenio,
            curso,
            previsaoFormatura:candidato.previsaoFormatura, 
            valorContratado: candidato.valorContratado,
            parcelasCobertas: candidato.parcelasCobertas,
            condicaoDaRestituicao:candidato.condicaoDaRestituicao,
            validade:[
                { de:candidato.de, ate:candidato.ate}
            ],
            inicioDaRestituicao:candidato.inicioDaRestituicao
        }).then(() =>{
            alert('cadastro realizado com sucesso')
            setCarregar(true)
            
        }).catch((err) =>{
            alert(err.message)
        })
    }    
    
        api.get('/candidatoExpress').then(response => {
            setListagemCandidato(response.data);
        }).catch((err) =>{
            alert(err.message)
        })

        
    



    
    
    
    return(
        
        <Container>
            <form onSubmit={handleCreateCandidato}>

        <Cell>    
            <Input 
                mask="cpf"
                name="cpf" 
                label="CPF" 
                onChange={handleChange}
        
            />
            <Input 
            mask="nome"
            name="nome" 
            label="Nome"
            onChange={handleChange} 
            />
            <Input 
                mask="email"
                name="email" 
                label="Email" 
                onChange={handleChange}
            />
            <Input 
                mask="telefone"
                name="telefone"     
                label="Telefone" 
                onChange={handleChange}
                />
            </Cell>
            
            <Cell>
        <Select 
             name="curso" 
             label="" 
             value={curso}
            onChange={(e) =>{setCurso(e.target.value)}}  
             options={[
                 {value:'Analise Desenvolvimento de Sistema', label:'Analise Desenvolvimento de Sistema'},
                 {value:'Redes', label:'Redes'}
             
             ]}
            />
        <Input 
            mask="mesAno"
            name="previsaoFormatura" 
            label="Previsão de formatura" 
            placeholder="SEMESTRE/ANO"
            onChange={handleChange} 
        />
        <Input 
            mask="currency"
            name="valorContratado" 
            label="Valor contratado" 
            onChange={handleChange}
        />
        <Input 
            mask="parcelas"
            name="parcelasCobertas" 
            label="Parcelas cobertas"
            onChange={handleChange}
        />
    </Cell>
    <Cell>
        <Input 
            mask="parcelas"
            name="condicaoDaRestituicao" 
            label="Parcelas restituir" 
            onChange={handleChange}
            />
        <Validade>
            <Input 
                mask="mesAno"
                label="validade" 
                name="de" 
                placeholder="De"
                onChange={handleChange}
                />
            <Input 
                mask="mesAno"
                name="ate" 
                label="" 
                placeholder="Até"
                onChange={handleChange}
                />
        </Validade>
        <Input 
            mask="mesAno"
            name="inicioDaRestituicao" 
            label="inicio da restituição" 
            placeholder="MÊS/ANO" 
            onChange={handleChange}
            />
        </Cell>
        
        <CellButton>
            <Button type="submit" name="Indicar Candidato" />
        </CellButton>
            </form>
            
             
            <SectionLista>
                 {
                     listagemCanditatos.map( (lista: Lista ) => {
                         return <ListagemCandidato key={lista.id} lista={lista} />
                     })
                 }     

                 
            </SectionLista> 
             
        </Container>
        );

} 
export default FormExpress;