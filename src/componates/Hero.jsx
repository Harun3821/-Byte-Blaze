import { Link } from "react-router-dom";


const Hero = () => {

    return (

            <div className="hero -mt-16">
            <div className="hero-content text-center">
                <div className="max-w-lg">
                <h1 className="text-4xl font-bold">Welcome to <span className="text-4xl bg-300% font-bold bg-gradient-to-r from-orange-400  via-red-500  to-green-400 text-transparent bg-clip-text animate-gradient">Byte Blaze</span></h1>
                <p className="py-6">ByteBlaze: Accelerating Innovation Through Cutting-Edge Solutions in Data Management and Analysis Technologies.</p>
               
               <div className="flex justify-center gap-2">
            <Link to='/bloges' className="relative inline-block px-4 py-2 font-medium group">
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-white border-2 border-secondary  group-hover:bg-primary"></span>
            <span className="relative text-black group-hover:text-white font-bold">Read Bloges</span>
            </Link>

            <Link to='/bookmarks' className="relative inline-block px-4 py-2 font-medium group">
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-white border-2 border-secondary  group-hover:bg-primary"></span>
            <span className="relative text-black group-hover:text-white font-bold">Bookmarks</span>
              </Link>
               </div>
                </div>
            </div>
            </div>
    );
};

export default Hero;