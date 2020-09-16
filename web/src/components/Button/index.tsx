import React, { ButtonHTMLAttributes } from 'react';

import {Container} from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    name?:string;

}

const Button: React.FC<ButtonProps> = ({name, ...rest}) =>{
    return(
        <Container>
            <button  {...rest}>{rest.children} {name}</button>
        </Container>
        
    )
}

export default Button;