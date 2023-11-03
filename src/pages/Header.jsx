import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";



function Header() {
    const navigate = useNavigate();

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const content = <>
        <div className="lg:hidden block absolute top-16 w-full lef right-0 bg-slate-900 transition">
            <ul className="text-center text-xl p-20">
                <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
                    <a href="#home" onClick={() => navigate('/')}>Home</a>
                </li>
                <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
                    <a href="#project" onClick={() => navigate('/#project')}>Project</a>
                </li>
            </ul>
        </div>
    </>
    return (
        <>
            <nav className="bg-slate-900 border-gray-900 dark:bg-gray-900">
                <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4">
                    <div className="flex items-center flex-1">
                        <span className="text-3xl font-bold">0$</span>
                    </div>
                    <div className="lg:flex md:flex lg: flex-1 items center justify-end font-normal hidden">
                        <div className="flex-10">
                            <ul className="flex gap-8 mr-16 text-[18px]">
                                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                                    <a href="#home" onClick={() => navigate('/')}>Home</a>
                                </li>
                                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                                    <a href="#project" onClick={() => navigate('/#project')}>Project</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        {click && content}
                    </div>
                    <button className="block sm:hidden transition" onClick={handleClick}>
                        {click ? <FaTimes /> : <CiMenuFries />}
                    </button>
                </div>
            </nav>
        </>
    );
}
export default Header;


