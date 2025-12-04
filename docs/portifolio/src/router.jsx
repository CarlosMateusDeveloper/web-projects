import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home.jsx";
import Ia from "./pages/ia/chat.jsx";

const router = createBrowserRouter([
    {path: "/" ,
        element: <Home/>,
    },
    {
        path: "/ia",
        element: <Ia/>
    }
])

export default router;