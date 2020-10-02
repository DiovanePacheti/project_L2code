import styled from 'styled-components';

export const Container = styled.div`
 >button{
    border: none;
    padding: 1rem 3.5rem;
    border-radius: 5rem;
    background:var( --color-menu-dark) ;
    color: var(--color-background-input);

    &:hover{
        cursor:pointer;
        color:var(--color-border-input);
    }

    &:focus {
    outline: thin dotted;
    outline: 0px auto -webkit-focus-ring-color;
    outline-offset: 0px;
}
`;