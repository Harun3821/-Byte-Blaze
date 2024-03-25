import { useLoaderData } from "react-router-dom";
import BlogeCard from "../componates/BlogeCard";


const Bloges = () => {

  const bloges = useLoaderData()


    return (
    <section className="bg-white-800 text-black py-6">
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
            <a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12">
                <img src={bloges[0].cover_image} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 bg-gray-100" />
                <div className="p-6 space-y-2 lg:col-span-5">
                    <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{bloges[0].title}</h3>
                    <span className="text-xs text-gray-400"> {new Date (bloges[0].published_timestamp).toLocaleDateString()} </span>
                    <p> {bloges[0].description} </p>
                </div>
            </a>
            <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

                {
                    bloges.map(blog => <BlogeCard key={blog.id} blog={blog}></BlogeCard>)
                }
            </div>
            
        </div>
    </section>
    );
};

export default Bloges;