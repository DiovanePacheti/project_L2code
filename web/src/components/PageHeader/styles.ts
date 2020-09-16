import styled , {css}from 'styled-components';
import { AiFillFileImage } from "react-icons/ai";
import {FaEllipsisV, FaChartPie, FaGraduationCap ,FaRedoAlt} from "react-icons/fa";

export const Container = styled.div`
    display: flex;
    justify-content:space-between;
    width:100%;
    background:var(--color-menu);
    height:6rem;
`;

const iconCss = css`
    color:var(--color-menu-dark);
    width:2.8rem;
    height:2.8rem;
    margin-right:1.5rem;
`;

export const Logo = styled.div`
    display:flex;
    /* width:5rem;
    height:5rem; */
`;

export const Menu = styled.nav`
    display:flex;
    width:70%;
    
`;

export const Botao = styled.li`
    display:flex;
    width:20%;
    height:100%;
    align-items:center;
    justify-content:center;
    border-top:4px solid var(--color-menu);
    cursor:pointer;

    &:hover{
        transition:180ms ease-in-out;
        border-top:4px solid var(--color-background);
        
    }
`;

export const SessaoLogado = styled.div`
    background:var(--color-menu-dark);
    width:15%;
    
    > Li{
        justify-content:center;
    }
`;

export const IconAiFillFileImage = styled(AiFillFileImage)`
    ${iconCss}
    width:3.7rem;
    height:3.7rem;
`;

export const IconFaEllipsisV = styled(FaEllipsisV)`
    ${iconCss}
    /* width:2rem;
    height:2rem; */
`;

export const IconMdSchool = styled(FaGraduationCap)`
    ${iconCss}
    width:4rem;
    height:4rem;
`;

export const IconFaRedoAlt = styled(FaRedoAlt)`
    ${iconCss}
`;

export const IconFaChartPie = styled(FaChartPie)`
    ${iconCss}
`; 
/*



.page-header ul li{
    font-size: 2rem;
    font-weight: 500;

}

.page-header ul li a{
    color:var(--color-text-menu);
    font-size:1.7rem ;

}
.page-header ul li a .iconsMenu{
    margin-right: 1rem;
    font-size:2.1rem ;
    color:var(--color-menu-dark);
}

.page-header .complementos-header{
    display: flex;
    justify-content: space-between;
    padding: 0 2rem 0 4rem;
    max-height: 60rem;
}
.page-header .complementos-header .historico-indicacoes{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size:1.4rem ;
    
}

.page-header .complementos-header .historico-indicacoes .clock-historico{
    margin-right: 0.7rem;
}
.page-header .complementos-header .historico-navegacao p{
    margin-bottom:1.5rem ;

}
.page-header .complementos-header .historico-navegacao strong{
    font: 700 2.6rem Archivo;
    line-height: 9.2rem;
    align-self:flex-end;
    color:var(--color-titulo);
}

.page-header .complementos-header .historico-indicacoes{
    color:var(--color-link);
    align-self: flex-end;
    margin-bottom:2.5rem ;
}

.sessaoLogado{
    background: var( --color-menu-dark);
    padding: 1.9rem 5rem; 
    align-content: stretch;
}
.sessaoLogado p{
    justify-content: center;
    align-items: center;
    color:white;
}
/*

.page-header .complementos-header{
    display: flex;
    padding: 0 5rem;
    justify-content: space-between;
    height: 13rem;
}

.complementos-header .historico-indicacoes{
    color: rgb(60, 109, 101);
}


*/