import React ,{ useEffect, useState }from 'react';
import Button from '../Button';
import FormCred from '../FormCred';
import FormExpress from '../FormExpress';
import Radio from '../Radio';

import {
    Container,
    RadioCheck,
    InputCampos
} from './styles';

const Formulario: React.FC = () =>{

    const [solucao, setSolucao] = useState('')

    useEffect(() =>{
        console.log(solucao)

    },[solucao]);
    return(
        <Container>
            <form>

                <RadioCheck>
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
                </RadioCheck>
                <InputCampos>
                    {

                        (solucao == 'Cred')?<FormCred />:<FormExpress />
                    }
                </InputCampos>
            </form>
        </Container>
    );
};

export default Formulario;