import React from "react";

function Text({children, ...props}){
    return <p {...props}>{children}</p>
}

export default Text