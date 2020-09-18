import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    width:100%;
    flex-direction:column;
    >form{
        flex-direction:column;
        display:flex;
        >Button{
            width:30rem;
        }
    }

`;

export const Cell = styled.div`
    display: grid;
    grid-template-columns:1fr 1fr 1fr 1fr;
    column-gap: 1rem;
    margin-bottom: 1rem;
    align-items:flex-end;
`;

export const Validade = styled.div`
    display:flex;
    align-items:flex-end;
    justify-content:flex-start;
    
    Input{
        width:80%;
        
    }
`;

export const CellButton = styled.div`
    display:flex;
    justify-content:flex-end;
`;