import { ICardContainer } from "@/interfaces/card-container";

export const CardContainer: React.FunctionComponent<ICardContainer> = (
    {firstComponent, secondComponent, thirdComponent}: ICardContainer) => {
    return (
        <div className="w-full py-[8rem] px-12 bg-white">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-12">
                {firstComponent}
                {secondComponent}
                {thirdComponent}
            </div>
        </div>
    );
}
