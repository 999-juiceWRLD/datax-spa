import Image from "next/image";
import Laptop from "../assets/laptop.jpg";
import { Button } from "./Button.component";

export const Analytics: React.FunctionComponent = () => {
    return (
        <div className="w-full bg-white py-16 px-4">
            <div className="px-5 max-w-[1240px] mx-auto grid md:grid-cols-2">
                    <Image className="mx-auto w-[340px] my-4" src={Laptop} width={200} height={200} alt="laptop-img"/>
                    <div className="flex flex-col justify-center text-black justify-items-center">
                        <p className="text-react-green font-semibold">DATA ANALYTICS DASHBOARD</p>
                        <h1 className="md:text-3xl font-bold sm:text-3xl  py-2">Manage Your Data Centrally</h1>
                        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit illum ducimus alias ipsam quis, ab numquam veritatis architecto iure tempora asperiores eum repellat voluptatum! Officia eos harum magni tenetur deleniti!</p>
                        <div className="mt-10 content-start self-center">
                        <Button backgroundColor="bg-black" textColor="text-react-green" />
                        </div>
                    </div>
                </div>
        </div>
    );
}
