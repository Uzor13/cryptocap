import React from 'react';
import HeaderType from "../../../types/Header";

const Header:React.FC<HeaderType> = ({value, classes}) => {
    return (
           <h1 className={classes}>{value}</h1>
    );
};

export default Header;
