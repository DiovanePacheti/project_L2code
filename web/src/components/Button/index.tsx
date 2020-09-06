import React, { ButtonHTMLAttributes } from 'react';
import './styles.css';
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    name?:string;

}

const Button: React.FC<ButtonProps> = ({name, ...rest}) =>{
    return(
    <button  {...rest}>{name}</button>
    )
}

export default Button;