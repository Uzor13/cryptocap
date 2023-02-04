import React, {FC} from 'react';
import ButtonType from "../../../types/Button";

const Button:FC<ButtonType> = ({ value, classes}) => {
    // @ts-ignore
    return (
        <button type="button" className={`rounded ${classes}`}>
            {value}
        </button>
    );
};

export default Button;
