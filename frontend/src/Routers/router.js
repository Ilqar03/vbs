import {createBrowserRouter} from "react-router-dom";
import Home from "../Pages/Home/Home";
import IdmanNovleri from "../Pages/IdmanNovleri/IdmanNovleri";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/idmannovleri",
      element: <IdmanNovleri/>,
    }
   
  ]);
  export default router