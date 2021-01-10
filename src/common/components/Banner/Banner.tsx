import React from "react";

interface IBanner {
    text: string;
}

const Banner: React.FunctionComponent <IBanner> = ({text}) => {
    return (
        <h1>
            {text}
        </h1>
        
    )
}
export default Banner;