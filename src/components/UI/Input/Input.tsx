import React, {FC} from 'react';
import InputType from "../../../types/Input";

const Input:FC<InputType> = ({type, classes, placeholder}) => {
    return (
        <input type={type} className={classes} placeholder={placeholder}/>
    );
};

export default Input;