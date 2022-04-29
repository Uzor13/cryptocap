import React from 'react';
import Header from "../Header/Header";
import Subtitle from "../Subtitle/Subtitle";
import TitleType from "../../../types/Title";

const Title:React.FC<TitleType> = ({header, subtitle, headerClass, subtitleClass}) => {
    return (
        <div>
            <Header value={header} classes={headerClass}/>
            <Subtitle classes={subtitleClass} children={subtitle}/>
        </div>
    );
};

export default Title;
