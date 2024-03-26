// import { useEffect, useState } from "react";
// import { getBloges } from "../utils";
// import BlogeCard from "../componates/BlogeCard";


const Bookmarks = () => {
// const [bloges, setBloges] = useState ([])

// useEffect(()=>{
//     const strosbloges = getBloges()
//     setBloges(strosbloges)
// },[])

    return (
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

                {/* {
                    bloges.map(blog => <BlogeCard key={blog.id} blog={blog}></BlogeCard>)
                }
                     */}
              <h2>My book mark</h2>
            </div>

    
    );
};

export default Bookmarks;