import React, { InputHTMLAttributes, useCallback } from 'react'
import {cpf, nome, email, telefone, currency,  mesAno, parcelas} from '../../utils/mask';
import './styles.css';



interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    label: string;
    
    mask: "cpf" | "nome" | "email" | "telefone" | "currency"  | "mesAno" | "parcelas"
    

}

const Input: React.FC<InputProps> = ({ mask, label , ...rest}) => {
    const handleKeyUp = useCallback((e: React.FormEvent<HTMLInputElement>) => {
       
        switch(mask){
            case 'cpf':
                cpf(e)
                break;
            case 'nome':
                nome(e)
                break;
            case 'email':
                email(e)
                break;
            case 'telefone':
                telefone(e)
                break;
            case 'currency':
                currency(e)
                break;
            case 'mesAno':
                mesAno(e)
                break;  
            case 'parcelas':
                parcelas(e)
                break;     
            default:
                console.log('nao encontrado');        

        }
                
    }, [mask]);
    return (
        <div className="input-block">
            <label htmlFor={label}>{label}</label>
            <input id={label} {...rest} onKeyUp={handleKeyUp}/>
        </div>
    )
}

export default Input;