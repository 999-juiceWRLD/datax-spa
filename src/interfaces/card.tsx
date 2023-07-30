import { StaticImageData } from "next/image";

export interface ICard {
    isSpecial?: boolean;
    imageSource: StaticImageData;
    type: string;
    price: string;
    specs: Array<string>;
}
