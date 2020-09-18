import styled from 'styled-components';
import { FaTrashAlt, FaListUl} from "react-icons/fa";

export const Container = styled.li`
    width: 90vw;
    margin: 1.8rem auto 0 ;
    height: 4rem;
    padding: 0 1rem ;
    display: flex;
    align-items: center;
    background:var(--color-background-li);   
    border-radius: 0.8rem;
    color: var( --color-menu-dark);
`;

export const DivLi = styled.div`
    display:flex;
    height:100%;
    align-items: center;
    justify-content:start;
    margin: 1rem auto 0;
    text-align:left;
    color:var(--color-input);

    > button{
        display:flex;
        background:none;
        border:none;
        padding:0.5rem;
        color:var(--color-menu-dark);
        justify-content:space-between;
        align-items:center;
    }
    
`;
export const Top = styled.div`
    display:flex;
    justify-content:space-between;
    
    > button{
        width:1rem;
    }
`;

export const Titulo = styled.h2`
`;

export const IconFaListUl = styled(FaListUl)`

`;
export const IconFaTrashAlt = styled(FaTrashAlt)``;


/*

.li-listagem .item strong{
    background:red;
    display: flex;
    justify-self: flex-start;
}*/