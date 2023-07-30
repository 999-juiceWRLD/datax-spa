import Link from "next/link"
import Page from "@/interfaces/page"
import { pagesArr } from "@/interfaces/page"
import { Column, NavColumn } from "@/interfaces/column"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"

export const NavigationRow: React.FunctionComponent = () => {
    return (
        <div className="flex sm:flex-row md:flex-row">
            {pagesArr.map(({id, title, url}: Page) => (
                <Link key={id} href={url} className="p-4 text-sm btn">{title}</Link>
            ))}
        </div>
    )
}

const NavCol = ({isColumnClosed=true, pagesArr}: Column) => {
    return (
        <div className={`col-nav ${!isColumnClosed ? "left-0" : "left-[-100%]"}`}>
            <ul className="pt-2 uppercase">
            {pagesArr.map(({id, title, url}: Page) => (
                <li key={id} className="p-4 text-xs link-element">
                    <Link href={url}>{title}</Link>
                </li>
            ))}
            </ul>
        </div>
    );
}

export const NavigationColumn = ({handleColumnNav, isColumnClosed}: NavColumn) => {
    return (
        <div>
            <div onClick={handleColumnNav}>
                { !isColumnClosed ? <button> <AiOutlineClose  size={20} /> </button> : <button> <AiOutlineMenu size={20} /> </button>  }
            </div>
            <NavCol isColumnClosed={isColumnClosed} pagesArr={pagesArr}/>
        </div>
    );
}
