import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home.jsx";
import Ia from "./pages/ia/chat.jsx";
import ErrorPage from "./pages/errorPage.jsx";
import NotFound from "./pages/NotFound.jsx";

const router = createBrowserRouter([
    {path: "/" ,
        element: <Home/>,
        errorElement: <ErrorPage />
    },
    {
        path: "/ia",
        element: <Ia/>
    },
     {
    path: "*",
    element: <NotFound />, // TRATA 404
  }
])

export default router;