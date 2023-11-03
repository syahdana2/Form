import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Project from "./Project";
import Typed from "react-typed";

function Hero() {
    const navigate = useNavigate();
    return (
        <>
            <section
                style={{
                    
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "100vh"
                }}
                id="home"
            >
                <video
                    autoPlay
                    loop
                    muted
                    style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "100vh",
                        position: "fixed",
                        top: 0,
                        left: 0,
                        zIndex: -99
                    }}
                >
                    <source src="src/assets/img/galaxy.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <Header />
                <div className="lg:px-56 px-10 lg:py-0 py-20 mt-10 text-center gap-5 lg-text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
                    <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
                        <h1 className="text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-br from-purple-600 to-blue-500 font-extrabold leading-tighter tracking-tighter mb-4"> Hello I`m <span className="text-slate-300"> Okan</span></h1>
                        <div className="my-2">
                            <Typed
                                strings={[
                                    "welcome to my portfolio",
                                    "I'm a Full Stack Developer",
                                    "I Like Design and UI/UX",
                                ]}
                                typeSpeed={150}
                                backSpeed={120}
                                loop
                            />
                        </div>
                        <div className="flex mt-12 md:order-2">
                            <a href="https://github.com/syahdana2?tab=repositories" target="blank" className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    Github ✨
                                </span>
                            </a>
                            <button onClick={() => navigate('/login')} className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    Login 🚀
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className="mt-6 animate__animated animate__bounceInRight">
                        <img className="animate-up-down" src="src/assets/img/astronot3.png" width={550} height={550} alt="" />
                    </div>
                </div>
            </section>
            <Project />
        </>
    );
}

export default Hero;