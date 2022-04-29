import React from 'react';
import IconType from "../../../types/Icon";
import Circle from "./Circle";

const Icon:React.FC<IconType> = ({icon}) => {
    return (
        <Circle>
            {icon}
        </Circle>
    );
};

export default Icon;
