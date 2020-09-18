import styled from 'styled-components';
import { FaSearch } from "react-icons/fa";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction:column; 
    background:var(--color-background);
`;

export const Form = styled.form`

    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 2rem;
    align-items: flex-end;
    /* padding: 0 2rem;
    margin-top: 0.6rem; */


`;
 export const IconFiSearch = styled(FaSearch)`
    
 `;

export const SectionLista = styled.div`
margin-top:6rem;
`;