import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { AppLayout } from "./components/layout/AppLayout";

import "./App.css";

import { Home } from "./pages/home";
import { About } from "./pages/About";
import { Country } from "./pages/Country";
import { Contect } from "./pages/Contect";
import { ErrorPage } from "./pages/ErrorPage";
import { CountryDetails } from "./components/layout/CountryDetails";


const router = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<ErrorPage/>,
    children:[{
    path : "/",
    element :<Home/>
  },
  {
    path : "country",
    element :<Country/>
  },
  
  {
    path : "country/:id",
    element :<CountryDetails/>
  },

  {
    path : "contect",
    element :<Contect/>
  },
  {
    path : "about",
    element :<About/>
  }]

  },
  
  
]);
const App =()=>{
  return <RouterProvider router={router}></RouterProvider>
}
export default App;