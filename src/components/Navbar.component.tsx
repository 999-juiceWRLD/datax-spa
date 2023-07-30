"use client"

import React, { useState, useEffect } from "react";
import { NavigationRow, NavigationColumn } from "./nav-helpers";


export const Navbar: React.FunctionComponent = () => {

    const [isColumnClosed, setColumnNav] = useState<boolean>(true);
    const [width, setWidth] = useState<number>(0); // don't use window.innerWidth now

    useEffect(() => {
        const handleResizeWindow = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResizeWindow);
        return () => {
            window.removeEventListener("resize", handleResizeWindow);
        }
    }, [])
    
    const handleColumnNav = () => {
        setColumnNav((prev) => (!prev));
    }

    return (
        <div className="flex justify-between items-center h-24 max-w-[1240px] px-4 mx-auto my-4 text-white">
            <h1 className="w-full text-3xl font-bold text-react-green z-10">DATAX.</h1>
            {width <= 640 ? <NavigationColumn isColumnClosed={isColumnClosed} handleColumnNav={handleColumnNav}/> : <NavigationRow />}
        </div>
    );
}
