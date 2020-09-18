import React from 'react';

import { Container } from './styles';

const Detalhes: React.FC = (props) =>{
    

    return(
        <Container>
            {props.children}
        </Container>
    )
}

export default Detalhes