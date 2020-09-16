import styled from 'styled-components';

export const Container = styled.li`
    width: 90vw;
    margin: 0.8rem auto ;
    height: 4rem;
    padding: 0 1rem ;
    display: flex;
    align-items: center;
    background:var(--color-background-li);   
    border-radius: 0.8rem;
    color: var( --color-menu-dark);
`;

export const DivLi = styled.div`
    /* background:red; */
    display:flex;
    align-items: center;
    justify-content:start;
    margin: 1rem auto 0;
    text-align:left;
    
`;

/*

.li-listagem .item strong{
    background:red;
    display: flex;
    justify-self: flex-start;
}*/