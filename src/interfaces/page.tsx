export default interface Page {
    id: number;
    title: string;
    url: string;
}

export const pagesArr: Array<Page> = [
    {
        id: 1,
        title: "Company",
        url: "/company"
    },
    {
        id: 2,
        title: "Resources",
        url: "/resources"
    },
    {
        id: 3,
        title: "About",
        url: "/about"
    },
    {
        id: 4,
        title: "Contacts",
        url: "/contacts"
    },
];
