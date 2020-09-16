import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
`;

export const Fieldset = styled.div`
    display: grid;
    grid-template-columns:1fr 1fr 1fr 1fr;
    column-gap: 1rem;
    margin-bottom: 2rem;
    `;

export const Buttons = styled.div`
    display:flex;
    /* align-items:flex-end;
    justify-content:flex-start; */
    
    
    Button{
        border: 0.2rem solid var( --color-menu-dark);
    color:var( --color-menu-dark) ;
    background: var(--color-background-input);
    margin-top: 2rem;
    width: 28rem;
    } 
    `;

export const FieldsetButton = styled.div`
    display:flex;
    justify-content:flex-end;
    margin-top:8.6rem;

`;