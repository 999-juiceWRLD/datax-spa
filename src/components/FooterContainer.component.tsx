import { 
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare
} from "react-icons/fa";

import { FooterContent } from "./FooterContent.component";

export const Footer: React.FunctionComponent = () => {
    return (
        <div className="max-w-[1240px] mx-auto py-16 px-4 grid md:grid-cols-3 gap-8 text-gray">
            <div>
                <h1 className="w-full text-2xl font-bold text-react-green">DataX</h1>
                <p className="text-xs py-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam sunt dicta, omnis porro dolor laudantium ex ratione aspernatur distinctio repellat beatae corrupti provident quas enim. Distinctio ullam pariatur dignissimos laudantium.</p>
                <div className="flex justify-around md:w-[75%] my-6">
                    <FaFacebookSquare size={30}/>
                    <FaInstagram size={30}/>
                    <FaTwitterSquare size={30}/>
                    <FaGithubSquare size={30}/>
                    <FaDribbbleSquare size={30}/>
                </div>
            </div>
            <div className="md:col-span-2 flex justify-around">
                <FooterContent title="Solutions" 
                    articleArr={["Analytics", "Marketing", "Commerce", "Insights"]}/>
                <FooterContent title="Support"
                    articleArr={["Pricing", "Documentation", "Guides", "API Status"]}/>
                <FooterContent title="Company"
                    articleArr={["About", "Blog", "News", "Careers"]}/>
                <FooterContent title="Legal"
                    articleArr={["Claims", "Policy", "Terms"]}/>
            </div>
        </div>
    );
}
