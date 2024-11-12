import "./App.css";
import Header from "./components/shared/Header/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Currencies from "./components/pages/Currencies/Currencies";
import Metals from "./components/pages/Metals/Metals";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Currencies />
      </>
    ),
  },
  {
    path: "/metals",
    element: (
      <>
        <Header />
        <Metals />
      </>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
