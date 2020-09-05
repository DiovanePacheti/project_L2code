import React, { InputHTMLAttributes } from 'react';

import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{

    label:string;
    name:string;
}

const Radio: React.FC<InputProps> = ({name, label , ...rest}) => {

        return(
            <div className="input-block-radio">
                <label htmlFor={name}>{label}</label>
                <input type="radio" name={name} {...rest}/>
            </div>
        );
}

export default Radio;