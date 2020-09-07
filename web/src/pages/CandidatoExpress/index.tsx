import React, { useState, FormEvent } from 'react';
import PageHeader from '../../components/PageHeader';
import Select from '../../components/Select';
import './styles.css';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Radio from '../../components/Radio';
import api from '../../services/api';

function CandidatoExpress(){

    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [curso, setCurso] = useState('');
    const [previsaoFormatura, setPrevisaoFormatura] = useState('');
    const [valorContratado, setValorContratado] = useState('')
    const [parcelasCobertas, setParcelasCobertas] = useState('')
    const [condicaoDaRestituicao,setCondicaoDaRestituicao] = useState('')
    const [validade, setValidate] = useState([]);
    const [convenio, SetConvenio] = useState('ULBRA-EAD');
    const [solucao, setSolucao] = useState('')
    const [de, setDe] = useState('');
    const [ate, setAte] = useState('')
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

        console.log({
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
        })
    }
 
    return(
        <div className="page-candidato-express" >
            <PageHeader title="Indicação especial">
             <div className="selectConvenio">
                <Select 
                
                    name="convenio" 
                    label="selecione o convênio vinculado aos estudantes que serão inidcados:" 
                    options={[
                        {value:'Cred', label:'ULBRA EAD - Cred'},
                        {value:'Express', label:'ULBRA EAD - Cred/express'}
                    
                    ]}
                
                />
            </div>     
            </PageHeader>
            <div className="cadastro-candidato-express">
                <form  onSubmit={handleCreateCandidato} id="formulario-candidato">
                    <div className="field-set">
                        <Radio 
                            name="solucao" 
                            label="Express"
                            value="Express" 
                            id="express" 
                            onChange={(e) => {setSolucao(e.target.value)}}
                        />   
                        <Radio 
                            name="solucao" 
                            label="Cred"
                            value="Cred" 
                            id="cred" 
                            onChange={(e) => {setSolucao(e.target.value)}}
                        />
                    </div>
                    <div className="field-set">
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
                    </div>
                    <div className="field-set">
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
                    </div> 
                    <div className="field-set">
                        <Input 
                            name="parcelas-restituir" 
                            label="Parcelas restituir" 
                            value={condicaoDaRestituicao}
                            onChange={(e) => {setCondicaoDaRestituicao(e.target.value)}}
                        />
                        <div className="field-set-interno">
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
                        </div>
                        <Input 
                            name="inicio-da-restituicao" 
                            label="inicio da restituição" 
                            placeholder="MÊS/ANO" 
                            value={inicioDaRestituicao}
                            onChange={(e) => {setInicioDaRestituicao(e.target.value)}}
                        />
                    </div>           
                    <Button type="submit" name="Indicar candidato" />
                </form>
            </div>
           


        </div>
    );
}

export default CandidatoExpress;