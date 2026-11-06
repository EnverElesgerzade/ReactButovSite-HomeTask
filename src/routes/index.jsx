import Layout from "../components/Layout/Layout";
import About from "../pages/About/About";
import Home from "../pages/Home/Home";
import Article from "../pages/Article/Article";

export const Routes = [
    {
        path: "/",
        element: <Layout />,
        children : [
            {
                index: true,
                element: <Home />,
            },
            
             {
                path: "/product",
                element: <Article />,
            },
              {
                path: "/about",
                element: <About />
            },
        ]
    },
  
]