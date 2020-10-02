import styled from 'styled-components';
import { FaTrashAlt, FaListUl} from "react-icons/fa";

export const Container = styled.li`
    display: grid;
    grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr;
    column-gap: 1.8rem;
    width: 90vw;
    margin: 1.8rem auto 0 ;
    height: 4rem;
    padding: 0 1rem ;
    align-items: center;
    background:var(--color-background-li);   
    border-radius: 0.8rem;
    color: var( --color-menu-dark);
`;

export const DivLi = styled.div`
    display:flex;
    flex-wrap:nowrap;
    width:100%;
    justify-content:flex-start;
    color:var(--color-input);
    overflow:hidden;
    text-overflow:ellipsis;
    white-space: nowrap;

    &:hover{
        overflow:visible;
    }

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
    margin-right:1rem;
`;
export const IconFaTrashAlt = styled(FaTrashAlt)`
    margin-right:1rem;
`;


