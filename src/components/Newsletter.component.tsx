export const NewsLetter: React.FunctionComponent = () => {
    return (
        <div className="w-full py-16 text-white">
            <div className="mx-8 grid sm:grid-rows-2 sm:grid-cols-1 md:grid-rows-1 md:grid-cols-3 lg:grid-cols-3">
                <div className="md: col-span-2">
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Want tips & tricks to optimize your flow?</h1>
                    <p className="text-xs">Sign up to our newsletter and stay up to date. Anytime cancel your subscription.</p>
                </div>
                <div className="my-4">
                    <input className="pl-3 py-2 text-xs rounded-md text-black ml-4" type="email" placeholder="enter your email" />
                    <button className="bg-react-green text-black rounded-md font-medium ml-4 my-6 px-6 py-2 w-[150px] text-xs">Notify Me</button>
                    <p className="text-xs">We care about you, and your data. Read our <a href="/p-policy" className="text-xs text-react-green">privacy policy.</a> </p>
                </div>
            </div>
        </div>
    );
}
