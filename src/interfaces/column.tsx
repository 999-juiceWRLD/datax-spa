import { MouseEventHandler } from "react";
import Page from "./page";

export interface Column {
    isColumnClosed: boolean;
    pagesArr: Array<Page>;
}

export interface NavColumn {
    handleColumnNav: MouseEventHandler<HTMLDivElement>;
    isColumnClosed: boolean;
}
