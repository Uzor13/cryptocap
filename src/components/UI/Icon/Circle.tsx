import React, {ReactNode} from 'react';

interface CircleName {
    children: ReactNode
}

const Circle = ({children}: CircleName) => {
    return (
        <div className="w-12 h-12 rounded-full bg-slate-800 relative flex justify-center items-center">
            {children}
        </div>
    );
};

export default Circle;
