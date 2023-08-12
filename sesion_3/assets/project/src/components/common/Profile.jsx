import React from "react";

function Profile({src, alt}){

    return(
        <img src={src}
            alt={alt}
            width={128}
            className="rounded-full border-8 border-slate-600" 
        />
    )
}

export default Profile