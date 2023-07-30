import { Button } from "./Button.component"
import { IWrapped } from "@/interfaces/wrapped-button"

export const WrappedButton: React.FunctionComponent<IWrapped> = ({contentText}: IWrapped) => {
    return (
        <div className="mt-10 content-start self-center">
            <Button backgroundColor="bg-react-green" textColor="text-black" content={contentText}/>
        </div>
    );
}
