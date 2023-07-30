import Link from "next/link";
import { IFooterContent } from "@/interfaces/footer-content";

export const FooterContent: React.FunctionComponent<IFooterContent> = ({title, articleArr}: IFooterContent) => {
    return (
        <div>
            <h6 className="font-medium text-[#9ca3af]">{title}</h6>
            <ul className="text-xs">
                {articleArr.map((val, idx) => (
                    <li key={idx} className="py-2">
                        <Link href={`${val.toLowerCase()}`}>{val}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
