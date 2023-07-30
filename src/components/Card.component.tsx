import Image, { StaticImageData } from "next/image";
import { ICard } from "@/interfaces/card";
import { Button } from "./Button.component";

export const Card: React.FunctionComponent<ICard> = ({isSpecial=false, imageSource, type, price, specs}) => {
    return (
        <div className={`w-full rounded-md border-gray sm:my-6  shadow-xl text-black flex flex-col p-4 hover:scale-105 delay-100 duration-700 ${isSpecial ? "bg-[#f3f4f6]" : ""}`}>
            <Image className="mx-auto h-10 w-auto mt-[-2.6rem] bg-transparent" src={imageSource} width={10} height={10} alt="offer-img"/>
            <h2 className="text-2xl font-bold text-center pt-8 pb-4">{type}</h2>
            <p className="text-2xl text-center pb-4 font-bold">{price}</p>
            <div className="divide-y divide-[#94a3b8]">
                {specs.map((val, idx) => (
                    <p key={idx} className="text-xs text-center py-2">{val}</p>
                ))}
            </div>
            <div className="mx-auto">
                <Button backgroundColor={isSpecial ? "bg-black": "bg-react-green"} 
                        textColor={isSpecial ? "text-react-green" : "text-black"}
                        content="Start Trial" />
            </div>
        </div>
    );
}
