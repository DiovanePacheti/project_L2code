import styled from 'styled-components';
import { FaRegClock } from "react-icons/fa";


export const Container = styled.div`
    width:94%;
    margin:0 auto;
    display:flex;
    flex-direction:column;
    
`;
export const Navegacao = styled.div`
    display:flex;
    height:2.8rem;
    align-items:flex-end;
    /* background-color:red; */
    font-size:1.4rem;

`;
export const TitleLinkHistorico = styled.div`
    display:flex;
    align-items:flex-end;
    height:9rem;
    justify-content:space-between;
`;
export const Title = styled.h2`
   color:var(--color-titulo);
`;
export const Lincando = styled.div`
    display:flex;
    align-items:center;
    color:var(--color-link);
    font-size:1.4rem;
    > a{
        color:var(--color-link);
    }
`;

export const Selecione = styled.div`
    padding-top:4rem;
    width:100%;
    margin-left:3rem;
`;
export const IconClock = styled(FaRegClock)`
    margin-right:0.2rem;
`;