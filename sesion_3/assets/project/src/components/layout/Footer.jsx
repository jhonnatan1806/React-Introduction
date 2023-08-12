import React from "react";
import Text from "../common/Text"

function Footer(){
    return(
        <footer className="text-center">
            <Text className="text-md text-white">
                &copy; Copyright 2023
            </Text>
            <Text className="text-sm text-white/50">
                Desgined by Jhonnatan
            </Text>
        </footer>
    );
}

export default Footer