import React from 'react';
import {AiOutlineGlobal, AiOutlineDown} from "react-icons/ai";
import Button from "../UI/Button/Button";

const NavActions = () => {
    return (
        <ul className="flex items-center gap-6">
            <li className="flex items-center gap-2">
                <AiOutlineGlobal/> EN <AiOutlineDown/>
            </li>
            <li>
                <Button value="Login" classes="px-7 py-2"/>
            </li>
        </ul>
    );
};

export default NavActions;
