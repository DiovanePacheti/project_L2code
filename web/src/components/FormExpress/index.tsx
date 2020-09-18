import React, {FormEvent, useState} from 'react';
import Input from '../Input';
import Select from '../Select';
import api from '../../services/api';
import ListagemCandidato, {Lista} from '../../components/ListagemCandidato';


import {Container, Cell, Validade, CellButton} from './styles';
import Button from '../Button';

const FormExpress: React.FC = () =>{

    const[listagemCanditatos, setListagemCandidato] = useState([]);

    const [cpf, setCpf] = useState('');
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [curso, setCurso] = useState('');
    const [previsaoFormatura, setPrevisaoFormatura] = useState('');
    const [valorContratado, setValorContratado] = useState('')
    const [parcelasCobertas, setParcelasCobertas] = useState('')
    const [solucao, setSolucao] = useState('Express')
    const [condicaoDaRestituicao,setCondicaoDaRestituicao] = useState('')
    const [validade, setValidate] = useState([]);
    const [convenio, SetConvenio] = useState('ULBRA-EAD');
    const [de, setDe] = useState('');
    const [ate, setAte] = useState('');
    const [inicioDaRestituicao, setInicioDaRestituicao] = useState('');
 
 
    function handleCreateCandidato(e:FormEvent){
        e.preventDefault();
        api.post('/candidatoExpress',{
            cpf,
            nome,
            email,
            telefone,
            solucao,
            convenio,
            curso,
            previsaoFormatura, 
            valorContratado: Number(valorContratado),
            parcelasCobertas: Number(parcelasCobertas),
            condicaoDaRestituicao: Number(condicaoDaRestituicao),
            validade:[
                { de, ate}
            ],
            inicioDaRestituicao
        }).then(() =>{
            alert('cadastro realizado com sucesso')
        }).catch((err) =>{
            alert(err.message)
        })

        
        api.get('/candidatoExpress').then(response => {
            setListagemCandidato(response.data);
        }).catch((err) =>{
            alert(err.message)
        })
    }
    
    
    return(
        
        <Container>
            <form onSubmit={handleCreateCandidato}>

        <Cell>    
            <Input 
                name="cpf" 
                label="CPF" 
                value={cpf}
                onChange={(e) => {setCpf(e.target.value)}}
        
            />
            <Input 
            name="nome" 
            label="Nome"
            value={nome}
            onChange={(e) => {setNome(e.target.value)}} 
            />
            <Input 
                name="email" 
                label="Email" 
                value={email}
                onChange={(e) =>{setEmail(e.target.value)}}
                />
            <Input 
                name="telefone"     
                label="Telefone" 
                value={telefone}
                onChange={(e) =>{setTelefone(e.target.value)}}
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
            name="previsao-de-formatura" 
            label="Previsão de formatura" 
            placeholder="ANO/SEMESTRE" 
            value={previsaoFormatura}
            onChange={(e) =>{setPrevisaoFormatura(e.target.value)}}    
            />
        <Input 
            name="valor-contratado" 
            label="Valor contratado" 
            value={valorContratado}
            onChange={(e) =>{setValorContratado(e.target.value)}}
            />
        <Input 
            name="parcelas-cobertas" 
            label="Parcelas cobertas"
            value={parcelasCobertas}
            onChange={(e) => {setParcelasCobertas(e.target.value)}} 
        />
    </Cell>
    <Cell>
        <Input 
            name="parcelas-restituir" 
            label="Parcelas restituir" 
            value={condicaoDaRestituicao}
            onChange={(e) => {setCondicaoDaRestituicao(e.target.value)}}
        />
        <Validade>
            <Input 
                label="validade" 
                name="De" 
                placeholder="De"
                value={de} 
                onChange={(e) => {setDe(e.target.value)}}
            />
            <Input 
                name="email" 
                label="" 
                placeholder="Até"
                value={ate}
                onChange={(e) => {setAte(e.target.value)}}
            />
        </Validade>
        <Input 
            name="inicio-da-restituicao" 
            label="inicio da restituição" 
            placeholder="MÊS/ANO" 
            value={inicioDaRestituicao}
            onChange={(e) => {setInicioDaRestituicao(e.target.value)}}
        />
        </Cell>
        <CellButton>
            <Button type="submit" name="Indicar Candidato" />
        </CellButton>
            </form>
            <div>
                 {
                     listagemCanditatos.map( (lista: Lista ) => {
                         return <ListagemCandidato key={lista.id} lista={lista} />
                        })
                 }     

                 
            </div> 
        </Container>
        );

} 
export default FormExpress;