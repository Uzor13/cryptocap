import React from 'react';
import Logo from "./Logo";
import Nav from "./Nav";

const Header = () => {
    return (
        <div className="w-full flex items-center py-6 justify-between">
            <Logo/>
            <Nav/>
        </div>
    );
};

export default Header;
