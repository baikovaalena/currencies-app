import './App.css';
import Header from "./components/Header/Header";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Currencies from "./components/Currencies/Currencies";

const router = createBrowserRouter([
    {
        path: "/",
        element:
            <>
                <Header/>
                <Currencies/>
            </>
    },
    {
        path: "/metals",
        element:
            <>
                <Header/>
            </>
    },
    {
        path: "/search",
        element:
            <>
                <Header/>
            </>
    }
])


function App() {
    return (
        <>
            <RouterProvider router={router}/>
        </>
    );
}

export default App;
