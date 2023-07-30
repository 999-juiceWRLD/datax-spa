"use client"

import { useState, useEffect } from "react"
import { WrappedButton } from "./WrappedButton.component";
import Typed from "react-typed";

export const Hero: React.FunctionComponent = () => {

    const [width, setWidth] = useState<number>(0); // don't use window.innerWidth now
    useEffect(() => {
        const handleResizeWindow = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResizeWindow);
        return () => {
            window.removeEventListener("resize", handleResizeWindow);
        }
    }, [])
  
    return (
    <div className="mb-40">
        <div className={`${width <= 640 ? "mt-10" : ""} mt-10 z-0 flex flex-col justify-center max-w-[650px] mx-auto w-full h-screen text-center`}>
            <p className="uppercase font-bold text-react-green text-xs mb-10">growing with data analytics</p>
            <h1 className="md:text-7xl sm:text-6xl font-bold md:py-6 mb-4">Grow with data.</h1>
            <div className={`flex sm:flex-col flex-col gap-x-2 pb-10 justify-center items-center`}>
                <p className="md:text-xl sm:text-4xl text-xl font-bold">Fast, flexible financing for</p>
                <Typed className="bg-gray md:text-xl sm:text-4xl text-xl font-bold" strings={["SaaS", "Cloud Apps", "Crypto's", "NASDAQ", "SP 500", "DAX", "and all others."]} typeSpeed={140} backSpeed={80} loop={true}/>
            </div>
            <p className="md:text-2xl text-xl font-bold text-gray">Use our data analytics tools to increase your revenue</p>
            <WrappedButton />
        </div>
    </div>
  )
}
