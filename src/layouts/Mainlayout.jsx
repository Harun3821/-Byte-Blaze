import { Outlet } from "react-router-dom";
import Nav from "../componates/Nav";
import Footer from "../componates/Footer";



const Mainlayout = () => {
    return (
        <div>
            
         <div className="h-16">
            <Nav></Nav> 
            </div>

            <div className="min-h-[calc(100vh-116px)]">
            <Outlet></Outlet>
            </div>

          {/*Footer*/}
          <Footer></Footer>

        </div>
    );
};

export default Mainlayout;