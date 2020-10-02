import React, {useState, FormEvent, useCallback} from 'react';
import Button from '../Button';
import Input from '../Input';
import Select from '../Select';
import api from '../../services/api';
import ListagemCandidato, {Lista} from '../../components/ListagemCandidato';
import {Container, Fieldset, Buttons,FieldsetButton ,SectionLista} from './styles';

interface InterfaceCandidato{
    cpf:string;
    nome:string;
    email:string;
    telefone:number;
    solucao:string;
    convenio:string;
}

const FormCred: React.FC = () =>{

    const [candidato, setCandidato] = useState<InterfaceCandidato>({} as InterfaceCandidato);

    const handleChange = useCallback((e: React.FormEvent<HTMLInputElement>) =>{
        setCandidato({
            ...candidato,
            [e.currentTarget.name]: e.currentTarget.value,
            solucao:"Express",
            convenio:"ULBRA-EAD"
        })
    }, [candidato])

    const[listagemCanditatos, setListagemCandidato] = useState([]);


    function handleCreateCandidato(e: FormEvent){
        e.preventDefault();
        console.log(candidato)
        api.post('/candidato',{
            cpf:candidato.cpf,
            nome:candidato.nome,
            email:candidato.email,
            telefone:candidato.telefone,
        }).then(() =>{
            alert('cadastro realizado com sucesso')
        }).catch(() =>{
            alert('erro na cadastro') 
        })

        api.get('/candidato').then(response => {
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
export default FormCred;