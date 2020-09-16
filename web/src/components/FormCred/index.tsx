import React, {useState, FormEvent} from 'react';
import Button from '../Button';
import Input from '../Input';
import Select from '../Select';
import api from '../../services/api';
import ListagemCandidato, {Lista} from '../../components/ListagemCandidato';



import {Container, Fieldset, Buttons,FieldsetButton } from './styles';

const FormCred: React.FC = () =>{

    const[listagemCanditatos, setListagemCandidato] = useState([]);

    const [cpf, setCpf] = useState('');
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [solucao, setSolucao] = useState('Cred');
    const [convenio, SetConvenio] = useState('ULBRA-EAD')

    function handleCreateCandidato(e: FormEvent){
        e.preventDefault();

        api.post('/candidato',{
            cpf,
            nome,
            email,
            telefone,
            solucao,
            convenio
        }).then(() =>{
            alert('cadastro realizado com sucesso')
        }).catch(() =>{
            alert('erro na cadastro') 
        })

        console.log({
            cpf,
            nome,
            email,
            telefone,
            solucao,
            convenio
        });

        api.get('/candidato').then(response => {
            console.log(response);
            setListagemCandidato(response.data);
        }).catch((err) =>{
            alert(err.message)
        })

    }

    
    return(
        
        <Container>
            <form onSubmit={handleCreateCandidato}>

            <Fieldset>    
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
                                onChange={(e) => {setEmail(e.target.value)}}
                            />
                            <Input 
                                name="telefone" 
                                label="Telefone" 
                                value={telefone}
                                onChange={(e) => {setTelefone(e.target.value)}}
                            />
            </Fieldset>
            <Fieldset>
                <Buttons>
                {/* <div className="field-set button-carregar-lista-layout"> */}
                    <Button name="Carregar lista" type="button" />
                    <Button name="Baixar layout" type="button" />
                </Buttons>
            </Fieldset>
            <FieldsetButton>

                        <Button name="Indicar Candidato" type="submit" />
            </FieldsetButton>

                            </form>
                        <div className="listando-candidatos">
                 {
                     listagemCanditatos.map( (lista: Lista ) => {
                         return <ListagemCandidato key={lista.id} lista={lista} />
                     })
                 }     

                 
            </div> 
          
        </Container>

        );

} 
export default FormCred;