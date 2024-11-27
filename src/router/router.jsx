import {createBrowserRouter } from "react-router";
import App from "../App"
import Home from "../pages/home/Home";
const router=createBrowserRouter([
    {
       path:'/',
       element:<App/>,
       children:[
        {
            path:'/',
            element:<h1><Home/></h1>
            /* Home mein multiple sub division rahege so create a separate page */
        },
        {
            path:'/orders',
            element:<div>Orders</div>
        },
        {
            path:"/about",
            element:<div>About</div>
        }
       ]
}]);

export default router;