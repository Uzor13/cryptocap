import React, {ReactElement} from 'react';
import Icon from "../UI/Icon/Icon";
import Title from "../UI/Title/Title";
import {Link} from "react-router-dom";
import {BsArrowRight} from "react-icons/bs";

interface CardType {
    header: string,
    headerClass: string,
    subtitleClass: string,
    subtitle: string,
    icon: ReactElement
}

const FeatureCard:React.FC<CardType> = ({icon, headerClass, subtitleClass, header, subtitle}) => {
    return (
        <div className="w-72 flex flex-col gap-4 px-6">
            <Icon icon={icon}/>
            <Title header={header} headerClass={headerClass} subtitleClass={subtitleClass} subtitle={subtitle}/>
            <a href="#" className="text-teal-500 flex gap-2 items-center text-sm">See Explained <BsArrowRight/></a>
        </div>
    );
};

export default FeatureCard;
