import { IButton } from "@/interfaces/button";

export const Button: React.FunctionComponent<IButton> = (
    {backgroundColor="bg-react-green", textColor="text-black", content="Get Started"}: IButton) => {
    return (
        <button className={`${backgroundColor} w-auto py-2 px-12 rounded-md font-medium my-6`}>
            <p className={`text-xs font-medium ${textColor}`}>{content}</p>
        </button>
    );
}
