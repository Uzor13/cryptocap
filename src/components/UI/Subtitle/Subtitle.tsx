import React from 'react';
import SubtitleType from "../../../types/Subtitle";

const Subtitle:React.FC<SubtitleType> = ({children, classes}) => {
    return (
        <p className={`font-roboto ${classes}`}>{children}</p>
    );
};

export default Subtitle;
