import "./App.css";
import Header from "./components/Header/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Currencies from "./components/Currencies/Currencies";
import Metals from "./components/Metals/Metals";

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
  {
    path: "/search",
    element: (
      <>
        <Header />
      </>
    ),
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
