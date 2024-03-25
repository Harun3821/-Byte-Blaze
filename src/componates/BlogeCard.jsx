import { Link } from "react-router-dom";

import img from "../assets/404.jpg"




const BlogeCard = ({blog}) => {

    const {cover_image, title, description, published_timestamp, id} = blog;

    return (
        <Link to={`/blog/${id}`} className="max-w-sm mx-auto transition border border-secondary hover:scale-105 hover:border-orange-300 hover:border-opacity-30 group hover:no-underline focus:no-underline hidden sm:block">
        <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src={cover_image || img} />
        <div className="p-6 space-y-2">
            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
            <span className="text-xs text-gray-400">{new Date(published_timestamp).toLocaleDateString()}</span>
            <p>{description}</p>
        </div>
    </Link>
    );
};

export default BlogeCard;