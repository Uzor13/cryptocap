import React, {FC} from 'react';
import ButtonType from "../../../types/Button";

const Button:FC<ButtonType> = ({ value, classes}) => {
    // @ts-ignore
    return (
        <button type="button" className={`bg-teal-600 text-white rounded ${classes}`}>
            {value}
        </button>
    );
};

export default Button;
