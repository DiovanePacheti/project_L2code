import React, { InputHTMLAttributes } from 'react';

import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{

    label:string;
    name:string;
}

const Radio: React.FC<InputProps> = ({name, label , ...rest}) => {

        return(
            <div className="input-block-radio">
                <input type="radio" name={name} {...rest}/>
                <label htmlFor={name}>{label}</label>
            </div>
        );
}

export default Radio;