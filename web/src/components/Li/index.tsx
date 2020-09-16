import React from 'react';
import { Container } from './styles';

interface LiProps{
    name:string;
}

const Li: React.FC<LiProps> = ({
    name
}) =>{
    return(
        <Container>
            <li>
                <a href="#">
                    {name}
                </a>
            </li>
        </Container>
    )
};

export default Li;